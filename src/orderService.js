export const ORDER_STATUSES = {
  NEW: "new",
  PREPARING: "preparing",
  READY: "ready",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export function createOrder({
  restaurant,
  customerName,
  customerPhone,
  orderType,
  tableNumber,
  address,
  notes,
  selectedBranch,
  cart,
}) {
  validateOrderData({
    restaurant,
    selectedBranch,
    customerName,
    customerPhone,
    orderType,
    tableNumber,
    address,
    cart,
  });

  const orderNumber = generateOrderNumber(
    restaurant.slug
  );

  const items = cart.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    total: item.price * item.quantity,
  }));

  const subtotal = items.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const branch = restaurant.branches?.find(
    (item) => item.id === selectedBranch
  );

  return {
    orderNumber,

    restaurant: {
      slug: restaurant.slug,
      name: restaurant.name,
    },

    branch: branch
      ? {
          id: branch.id,
          name: branch.name,
          phone: branch.phone || "",
          location: branch.location || "",
        }
      : null,

    customer: {
      name: customerName.trim(),
      phone: customerPhone.trim(),
    },

    orderType,

    tableNumber:
      orderType === "داخل المطعم"
        ? tableNumber.trim()
        : "",

    address:
      orderType === "توصيل"
        ? address.trim()
        : "",

    notes: notes.trim(),

    items,

    subtotal,

    currency: restaurant.currency || "د.ع",

    createdAt: new Date().toISOString(),

    status: ORDER_STATUSES.NEW,
  };
}

function validateOrderData({
  restaurant,
  selectedBranch,
  customerName,
  customerPhone,
  orderType,
  tableNumber,
  address,
  cart,
}) {
  if (!restaurant) {
    throw new Error("المطعم غير موجود");
  }

  if (restaurant.orderEnabled === false) {
    throw new Error("الطلبات متوقفة حاليًا");
  }

  const allowedOrderTypes = [
    "داخل المطعم",
    "استلام من المطعم",
    "توصيل",
  ];

  if (!allowedOrderTypes.includes(orderType)) {
    throw new Error("نوع الطلب غير صحيح");
  }

  if (
    orderType !== "داخل المطعم" &&
    !customerName?.trim()
  ) {
    throw new Error("اسم الزبون مطلوب");
  }

  if (
    orderType !== "داخل المطعم" &&
    !customerPhone?.trim()
  ) {
    throw new Error("رقم الهاتف مطلوب");
  }

  if (
    orderType === "داخل المطعم" &&
    !tableNumber?.trim()
  ) {
    throw new Error("رقم الطاولة مطلوب");
  }

  if (
    orderType === "توصيل" &&
    !address?.trim()
  ) {
    throw new Error("عنوان التوصيل مطلوب");
  }

  if (
    orderType !== "داخل المطعم" &&
    restaurant.branchesEnabled &&
    restaurant.branches?.length > 0
  ) {
    if (!selectedBranch) {
      throw new Error("الفرع مطلوب");
    }

    const branch = restaurant.branches.find(
      (item) => item.id === selectedBranch
    );

    if (!branch) {
      throw new Error("الفرع المختار غير موجود");
    }

    if (!branch.phone?.trim()) {
      throw new Error(
        "رقم WhatsApp الخاص بالفرع غير موجود"
      );
    }
  }

  if (!Array.isArray(cart) || cart.length === 0) {
    throw new Error("السلة فارغة");
  }

  for (const item of cart) {
    if (!item.id) {
      throw new Error("الصنف لا يحتوي على ID");
    }

    if (!item.name) {
      throw new Error("الصنف لا يحتوي على اسم");
    }

    if (
      typeof item.price !== "number" ||
      !Number.isFinite(item.price) ||
      item.price < 0
    ) {
      throw new Error("سعر الصنف غير صحيح");
    }

    if (
      !Number.isInteger(item.quantity) ||
      item.quantity <= 0
    ) {
      throw new Error("كمية الصنف غير صحيحة");
    }
  }
}

function generateOrderNumber(slug) {
  const storageKey = `plato-order-number-${slug}`;

  let lastNumber = 0;

  try {
    lastNumber =
      Number(localStorage.getItem(storageKey)) || 0;
  } catch {
    lastNumber = 0;
  }

  const nextNumber =
    lastNumber >= 999 ? 1 : lastNumber + 1;

  try {
    localStorage.setItem(
      storageKey,
      String(nextNumber)
    );
  } catch {
    // Continue even if localStorage is unavailable.
  }

  return `P-${String(nextNumber).padStart(3, "0")}`;
}