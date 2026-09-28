import { useState } from "react";
import "./App.css";
import categories, { menus } from "./menuData";
import restaurants from "./restaurants";
const restaurantSlug = window.location.pathname.replace("/", "") || "burger-house";

const selectedRestaurant =
  restaurants.find(
    (item) => item.slug === restaurantSlug
  )
 
  const selectedMenu = menus[restaurantSlug] || categories;
  function PlatoHome() {
  return (
    <div className="plato-home">
      <div className="plato-glow plato-glow-one"></div>
      <div className="plato-glow plato-glow-two"></div>

      <main className="plato-content">
        <div className="plato-logo">PLATO</div>
  <svg
    className="plato-network"
    viewBox="0 0 1200 800"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <g className="network-lines">
      <path d="M-50 180 C180 80 250 300 470 190 S760 70 1250 210" />
      <path d="M-100 520 C150 400 260 620 500 500 S850 390 1300 540" />
      <path d="M180 -50 C300 150 250 330 430 430 S650 620 720 850" />
      <path d="M850 -50 C760 160 900 260 760 410 S920 620 1080 850" />
      <path d="M-50 680 C180 560 330 700 520 620 S900 520 1250 650" />
    </g>

    <g className="network-nodes">
      <circle cx="180" cy="130" r="3" />
      <circle cx="470" cy="190" r="3" />
      <circle cx="760" cy="120" r="3" />
      <circle cx="980" cy="210" r="3" />
      <circle cx="250" cy="500" r="3" />
      <circle cx="500" cy="500" r="3" />
      <circle cx="760" cy="410" r="3" />
      <circle cx="1000" cy="540" r="3" />
    </g>

    <g className="network-packets">
      <circle r="5">
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          path="M-50 180 C180 80 250 300 470 190 S760 70 1250 210"
        />
      </circle>

      <circle r="4">
        <animateMotion
          dur="9s"
          begin="2s"
          repeatCount="indefinite"
          path="M-100 520 C150 400 260 620 500 500 S850 390 1300 540"
        />
      </circle>

      <circle r="4">
        <animateMotion
          dur="8s"
          begin="1s"
          repeatCount="indefinite"
          path="M180 -50 C300 150 250 330 430 430 S650 620 720 850"
        />
      </circle>

      <circle r="5">
        <animateMotion
          dur="10s"
          begin="3s"
          repeatCount="indefinite"
          path="M850 -50 C760 160 900 260 760 410 S920 620 1080 850"
        />
      </circle>
    </g>
  </svg>
        <p className="plato-slogan">
          YOUR PARTNER FOR TECH SOLUTION
        </p>

        <p className="plato-description">
          حلول تقنية مصممة لتطوير أعمالك
        </p>

        <div className="plato-contact">
          <a href="#" className="plato-button">
            WhatsApp
          </a>

          <a href="#" className="plato-button">
            Instagram
          </a>

          <a href="#" className="plato-button">
            Facebook
          </a>
        </div>

        <p className="plato-footer">
          © 2026 PLATO
        </p>
      </main>
    </div>
  );
}
 
function App() { 
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderType, setOrderType] = useState("استلام من المطعم");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
    if (window.location.pathname === "/") {
    return <PlatoHome />;
  }

  // إضافة منتج للسلة
  function addToCart(item) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  // زيادة كمية المنتج
  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  // تقليل كمية المنتج
  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // حذف المنتج بالكامل
  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  // عدد القطع الموجودة في السلة
  const itemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // حساب المجموع
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // فتح صفحة Checkout
  function openCheckout() {
    if (cart.length === 0) {
      alert("السلة فارغة");
      return;
    }

    setShowCheckout(true);
  }

  // إغلاق Checkout
  function closeCheckout() {
    setShowCheckout(false);
  }

  // إرسال الطلب إلى WhatsApp
  
function sendToWhatsApp() {

  if (!customerName.trim()) {
    alert("يرجى كتابة الاسم");
    return;
  }

  if (!customerPhone.trim()) {
    alert("يرجى كتابة رقم الهاتف");
    return;
  }

  if (orderType === "توصيل" && !address.trim()) {
    alert("يرجى كتابة عنوان التوصيل");
    return;
  }

  const phone = selectedRestaurant.phone;

  let message = "";

  message += `طلب جديد - ${selectedRestaurant.name}\n`;
  message += `--------------------------\n\n`;

  message += `الاسم: ${customerName}\n`;
  message += `الهاتف: ${customerPhone}\n`;
  message += `نوع الطلب: ${orderType}\n`;

  if (orderType === "توصيل") {
    message += `العنوان: ${address}\n`;
  }

  if (notes.trim()) {
    message += `ملاحظات: ${notes}\n`;
  }

  message += `\nالطلب:\n`;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;

    message += `${item.name} × ${item.quantity} = ${itemTotal.toLocaleString()} د.ع\n`;
  });

  message += `\n--------------------------\n`;
  message += `المجموع: ${total.toLocaleString()} د.ع\n`;

  message += `\nشكراً لطلبك من ${selectedRestaurant.name}`;

  const whatsappUrl =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappUrl;
}
  return (
    <div className="app">
    <div className="brand-name">PLATO</div>

      {/* =========================
          HEADER / COVER
      ========================== */}

      <header className="hero">

        <div className="hero-overlay">

          <div className="logo">
             {selectedRestaurant.logo}
          </div>

          <h1>
            {selectedRestaurant.name}
          </h1>

          <p>
{selectedRestaurant.description}        
  </p>

          <div className="buttons">

            <a
              href={`https://wa.me/${selectedRestaurant.phone}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href={selectedRestaurant.location}
              target="_blank"
              rel="noreferrer"
            >
              الموقع
            </a>

          </div>

        </div>

      </header>


      {/* =========================
          MAIN MENU
      ========================== */}

      <main>

        {/* الأقسام */}

        <div className="categories">

          {selectedMenu.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                const element = document.getElementById(
                  `category-${category.name}`
                );

                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {category.name}
            </button>
          ))}

        </div>


        {/* المنتجات */}

        {selectedMenu.map((category) => (

          <section
            key={category.name}
            id={`category-${category.name}`}
            className="category"
          >

            <h2>
              {category.name}
            </h2>


            <div className="products">

              {category.items.map((item) => (

                <div
                  className="product"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  <div className="product-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.description}
                    </p>


                    <div className="product-bottom">

                      <strong>
                        {item.price.toLocaleString()} د.ع
                      </strong>


                      <button
                        onClick={() => addToCart(item)}
                      >
                        أضف للسلة
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        ))}

      </main>


      {/* =========================
          CART
      ========================== */}

{cart.length > 0 && (
  <div className="cart">
    <div className="cart-summary">
      <div className="cart-total-info">
        <span className="cart-title">
          🛒 السلة
        </span>

        <span className="cart-count">
          {itemCount} قطعة
        </span>

        <strong className="cart-total">
          {total.toLocaleString()} د.ع
        </strong>
      </div>

      <button
        className="checkout-button"
        onClick={openCheckout}
      >
        إتمام الطلب
      </button>

      <button
        className="show-cart-button"
        onClick={() => {
          const cartItems = document.querySelector(".cart-items");

          if (cartItems) {
            cartItems.classList.toggle("show");
          }
        }}
      >
        عرض السلة
      </button>
    </div>

    <div className="cart-items">
      {cart.map((item) => (
        <div
          className="cart-item"
          key={item.id}
        >
          <div className="cart-item-info">
            <strong>
              {item.name}
            </strong>

            <span>
              {(item.price * item.quantity).toLocaleString()} د.ع
            </span>
          </div>

          <div className="quantity-controls">
            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
            >
              +
            </button>

            <span>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
            >
              −
            </button>

            <button
              className="remove-button"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
      {/* =========================
          CHECKOUT
      ========================== */}

      {showCheckout && (

        <div className="checkout-overlay">

          <div className="checkout">

            {/* Header */}

            <div className="checkout-header">

              <h2>
                إتمام الطلب
              </h2>

              <button
                className="close-checkout"
                onClick={closeCheckout}
              >
                ×
              </button>

            </div>


            {/* الاسم */}

            <label>
              الاسم
            </label>

            <input
              type="text"
              placeholder="اكتب اسمك"
              value={customerName}
              onChange={(e) =>
                setCustomerName(e.target.value)
              }
            />


            {/* الهاتف */}

            <label>
              رقم الهاتف
            </label>

            <input
              type="tel"
              placeholder="07XXXXXXXXX"
              value={customerPhone}
              onChange={(e) =>
                setCustomerPhone(e.target.value)
              }
            />


            {/* نوع الطلب */}

            <label>
              نوع الطلب
            </label>


            <div className="order-types">

              <button
                type="button"
                className={
                  orderType === "استلام من المطعم"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setOrderType("استلام من المطعم")
                }
              >
                استلام من المطعم
              </button>


              <button
                type="button"
                className={
                  orderType === "توصيل"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setOrderType("توصيل")
                }
              >
                توصيل
              </button>

            </div>


            {/* العنوان */}

            {orderType === "توصيل" && (

              <>
                <label>
                  العنوان
                </label>

                <textarea
                  placeholder="اكتب عنوان التوصيل"
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                />

              </>

            )}


            {/* الملاحظات */}

            <label>
              ملاحظات
            </label>

            <textarea
              placeholder="مثلاً: بدون بصل، بدون صوص..."
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
            />


            {/* ملخص الطلب */}

            <div className="checkout-order-summary">

              <h3>
                ملخص الطلب
              </h3>

              {cart.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <strong>
                    {(item.price * item.quantity).toLocaleString()} د.ع
                  </strong>

                </div>

              ))}

            </div>


            {/* المجموع */}

            <div className="checkout-total">

              <span>
                المجموع
              </span>

              <strong>
                {total.toLocaleString()} د.ع
              </strong>

            </div>
            {/* زر إرسال الطلب */}

            <button
  type="button"
  className="send-order-button"
  onClick={sendToWhatsApp}
>
  إتمام الطلب
</button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;