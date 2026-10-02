# PLATO PROJECT CONTEXT
## Project Continuity File — V1

> هذا الملف هو المرجع الأساسي لاستمرارية مشروع PLATO TECH.
> يجب تحديثه بعد التغييرات المهمة في بنية المشروع أو وظائفه أو قراراته.
>
> **قاعدة مهمة:** عند وجود تعارض بين هذا الملف والكود الفعلي، يكون **الكود الفعلي الحالي هو مصدر الحقيقة**، ويجب تحديث هذا الملف ليطابقه.

---

# 1. PROJECT IDENTITY

## Project Name

**PLATO**

## Business Brand

**PLATO TECH**

## Current Slogan

**YOUR PARTNER FOR TECH SOLUTION**

## Project Type

مشروع تجاري لإنشاء وبيع مواقع منيو رقمية للمطاعم والكافيهات في العراق.

الفكرة الأساسية هي تقديم صفحة منيو احترافية للمطعم يمكن للزبون فتحها من خلال QR Code أو رابط مباشر، مع إمكانية تطويرها إلى نظام طلبات يرسل الطلب إلى WhatsApp الخاص بالمطعم.

---

# 2. BUSINESS GOAL

الهدف التجاري هو إنشاء منتج رقمي يمكن بيعه للمطاعم والكافيهات كخدمة تنفيذ مرة واحدة، وليس كنظام اشتراك شهري.

## النموذج الأساسي

### Service 1 — Digital Menu

- موقع منيو رقمي للمطعم.
- عرض التصنيفات والأصناف.
- صور وأسعار ووصف المنتجات.
- تصميم Responsive للموبايل.
- رابط خاص بالمطعم.
- QR Code يمكن وضعه على الطاولات.
- هوية وتصميم قابلان للتخصيص.

### Service 2 — Digital Menu + Ordering

يشمل:

- كل خصائص المنيو.
- سلة مشتريات.
- تحديد نوع الطلب.
- داخل المطعم.
- استلام من المطعم.
- توصيل.
- بيانات الزبون.
- رقم الطاولة عند الطلب داخل المطعم.
- عنوان التوصيل عند اختيار التوصيل.
- ملاحظات.
- إنشاء رقم طلب.
- تجهيز رسالة طلب باللغة العربية.
- إرسال الطلب إلى WhatsApp الخاص بالمطعم.

---

# 3. BUSINESS CONSTRAINTS

## Important

المشروع مصمم بحيث تكون التكاليف التقنية المستمرة على صاحب المشروع قريبة من الصفر قدر الإمكان.

### قرارات تجارية أساسية

- لا نريد تحويل المنتج إلى SaaS باشتراك شهري.
- الهدف هو بيع الموقع/الخدمة للمطعم كتنفيذ منفصل.
- يجب الحفاظ على إمكانية إنشاء مواقع لعدة مطاعم.
- يجب أن تكون إضافة مطعم جديد سهلة قدر الإمكان.
- يجب أن يكون النظام قابلاً للتوسع بدون إعادة بناء المشروع من الصفر.

---

# 4. USER TECHNICAL PROFILE

صاحب المشروع لديه خبرة برمجية محدودة جداً، وتم بناء المشروع بأسلوب تدريجي.

## Important development preference

عند تعديل المشروع:

1. لا تعيد كتابة المشروع بالكامل إذا لم يكن ذلك ضرورياً.
2. استخدم تغييرات صغيرة ومحددة.
3. أعطِ الكود الجاهز للنسخ عندما تكون هناك حاجة لتعديل كود.
4. لا تغيّر أجزاء تعمل بالفعل بدون سبب.
5. قبل أي تعديل كبير، وضّح بالضبط ماذا سيتغير.
6. تجنب كسر الوظائف الحالية.

---

# 5. TECHNOLOGY STACK

## Frontend

- React
- React DOM
- Vite
- JavaScript / JSX
- CSS

## Current versions

From `package.json`:

```text
React: 19.2.8
React DOM: 19.2.8
Vite: 8.3.0
ESLint: 10.10.0
@vitejs/plugin-react: 6.1.1
```

## Runtime / package setup

`package.json`:

```json
{
  "name": "PLATO",
  "private": true,
  "version": "0.0.0",
  "type": "module"
}
```

---

# 6. NPM COMMANDS

Available scripts:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Preview production build

```bash
npm run preview
```

---

# 7. VITE CONFIGURATION

Current `vite.config.js`:

```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})
```

## Current configuration characteristics

- Uses Vite.
- Uses React plugin.
- No custom aliases.
- No custom proxy.
- No special build configuration currently defined.

---

# 8. HTML ENTRY POINT

Current `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PLATO | YOUR PARTNER FOR TECH SOLUTION</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Important

React starts from:

```text
src/main.jsx
```

---

# 9. REACT ENTRY POINT

Current `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## Responsibilities

- Loads global CSS through `index.css`.
- Imports `App.jsx`.
- Creates React root.
- Renders `<App />`.
- Uses React `StrictMode`.

---

# 10. CURRENT PROJECT STRUCTURE

Known structure:

```text
PLATO/
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
│
├── PLATO_PROJECT_CONTEXT.md
│
├── public/
│   ├── favicon.svg
│   ├── logos/
│   │   └── 1.jpg
│   │
│   └── IMG/
│       └── MEAT BURGER.png
│
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── App.css
    ├── dataService.js
    ├── orderService.js
    ├── restaurants.js
    └── menuData.js
```

> بعض تفاصيل المجلدات العامة أعلاه مبنية على الملفات المستخدمة في الكود الحالي، وليست جرداً مؤكداً لكل الملفات الموجودة فعلياً في المشروع.

---

# 11. MAIN APPLICATION ARCHITECTURE

المشروع حالياً يستخدم بنية Multi-Restaurant.

الفكرة:

```text
URL
 ↓
Restaurant Slug
 ↓
dataService
 ↓
restaurants.js + menuData.js
 ↓
Restaurant Data
 ↓
App.jsx
 ↓
Menu UI
```

---

# 12. ROUTING APPROACH

لا يوجد React Router حالياً.

يتم تحديد المطعم من خلال:

```js
const restaurantSlug =
  window.location.pathname.split("/").filter(Boolean)[0]
  || "burger-house";
```

ثم:

```js
const restaurantData = getRestaurantData(restaurantSlug);
```

ثم:

```js
const selectedRestaurant = restaurantData?.restaurant;
const selectedMenu = restaurantData?.menu || [];
```

## Current route concept

مثلاً:

```text
/chef-bashar
```

يبحث عن:

```text
chef-bashar
```

في `restaurants.js`.

---

# 13. HOME PAGE

عند فتح:

```text
/
```

يتم عرض صفحة PLATO TECH الرئيسية بدلاً من منيو مطعم.

الصفحة تسمى في React:

```jsx
PlatoHome()
```

## Landing page content

- PLATO logo.
- Slogan:
  `YOUR PARTNER FOR TECH SOLUTION`
- وصف عربي.
- WhatsApp.
- Instagram.
- Facebook.
- DIGITAL SOLUTIONS status.
- Copyright 2026.

---

# 14. RESTAURANT PAGE

عند فتح slug خاص بمطعم:

```text
/<restaurant-slug>
```

يتم:

1. استخراج slug.
2. البحث عن المطعم.
3. تحميل القائمة.
4. عرض Hero.
5. عرض التصنيفات.
6. عرض المنتجات.
7. تفعيل الطلبات إذا كانت `orderEnabled`.

إذا لم يتم العثور على المطعم، تظهر رسالة:

```text
المطعم غير موجود
```

---

# 15. DATA SERVICE

Current `src/dataService.js`:

```js
import { getRestaurantBySlug } from "./restaurants";
import { getMenuBySlug } from "./menuData";

export function getRestaurant(slug) {
  return getRestaurantBySlug(slug);
}

export function getRestaurantMenu(slug) {
  return getMenuBySlug(slug);
}

export function getRestaurantData(slug) {
  const restaurant = getRestaurant(slug);
  const menu = getRestaurantMenu(slug);

  if (!restaurant) {
    return null;
  }

  return {
    restaurant,
    menu,
  };
}
```

## Responsibility

هذا الملف هو الوسيط بين:

```text
App.jsx
   ↓
dataService.js
   ↓
restaurants.js
menuData.js
```

---

# 16. RESTAURANT DATA

Current `restaurants.js` contains one registered restaurant.

## Current restaurant

```text
Slug:
chef-bashar

Name:
Chef Bashar

Description:
مطعم يقدم اشهى الاطباق العربية والغربية

Phone:
9647722248374

Location:
Google Maps short link

Logo fallback:
CH

Logo image:
/logos/1.jpg

Theme primary:
#7c3aed

Theme dark:
#171717

Currency:
د.ع

Ordering:
Enabled
```

Current object structure:

```js
{
  slug: "chef-bashar",
  name: "Chef Bashar",
  description: "مطعم يقدم اشهى الاطباق العربية والغربية ",
  phone: "9647722248374",
  location: "https://maps.app.goo.gl/mxJWrzvZRNE1VjkU6",
  logo: "CH",
  logoImage: "/logos/1.jpg",
  theme: {
    primary: "#7c3aed",
    dark: "#171717",
  },
  currency: "د.ع",
  orderEnabled: true,
}
```

---

# 17. RESTAURANT REGISTRY FUNCTIONS

`restaurants.js` provides:

```js
getRestaurantBySlug(slug)
```

Finds a restaurant by slug.

```js
getAllRestaurants()
```

Returns all restaurants.

Default export:

```js
restaurants
```

---

# 18. MENU DATA

Current `menuData.js` contains menu data for these slugs:

```text
chef-bashar
coffee-time
pizza-house
test-restaurant
```

## Important

Only:

```text
chef-bashar
```

is currently registered in `restaurants.js`.

Therefore the other menus appear to be test/demo data unless those restaurants are added to the restaurant registry.

---

# 19. MENU STRUCTURE

General structure:

```text
menus
 └── restaurant slug
      └── category
           ├── id
           ├── name
           ├── order
           └── items
                ├── id
                ├── name
                ├── description
                ├── price
                ├── image
                ├── imageAlt
                ├── available
                ├── orderEnabled
                └── order
```

---

# 20. CURRENT CHEF BASHAR MENU

Categories:

```text
برجر
الفنكر
مشروبات
```

There are burger, fries and drink products.

Prices are currently in Iraqi dinar.

---

# 21. MENU DATA FUNCTIONS

Current functions:

```js
getMenuBySlug(slug)
```

Returns:

```js
menus[slug] || []
```

Also:

```js
getAvailableItems(slug)
```

Filters items using:

```js
item.available
```

---

# 22. IMPORTANT MENU DATA ISSUE

There are duplicate product IDs inside the current `chef-bashar` data.

Examples include repeated:

```text
ch-001
```

across different categories.

There are also duplicate Pepsi entries using the same ID.

## Why this matters

The cart logic in `App.jsx` identifies products by:

```js
item.id
```

Therefore two different products sharing the same ID can collide in the cart.

### Status

**Known issue — not fixed yet.**

### Future solution

Product IDs should eventually be globally unique within each restaurant, preferably using a consistent scheme.

Example:

```text
ch-burger-001
ch-fries-001
ch-drink-001
```

Do not change this automatically without testing the cart.

---

# 23. LEGACY MENU ISSUE

At the end of `menuData.js` there is:

```js
categories = menus["burger-house"]
```

However, there is currently no:

```text
burger-house
```

menu key in the provided `menus` object.

Therefore the default `categories` export may be:

```text
undefined
```

This appears to be legacy compatibility code.

### Status

**Known potential issue — not fixed yet.**

Do not remove or change it unless confirmed that no existing code depends on it.

---

# 24. AVAILABLE / ORDERABLE ITEMS

Menu items contain:

```js
available
```

and:

```js
orderEnabled
```

However, the current `App.jsx` primarily receives the menu from:

```js
getRestaurantData()
```

and renders the selected menu.

It does not currently rely on `getAvailableItems()` to filter all unavailable items.

### Potential future improvement

Separate:

- item visibility
- item availability
- ordering availability

before rendering.

---

# 25. APP STATE

Current `App.jsx` state includes:

```js
cart
showCheckout
createdOrder
whatsappUrl
customerName
customerPhone
orderType
tableNumber
address
notes
```

Default order type:

```text
استلام من المطعم
```

---

# 26. CART SYSTEM

The cart supports:

- Add item.
- Increase quantity.
- Decrease quantity.
- Remove item.
- Item count.
- Total price.

## Add logic

Items are merged using:

```js
item.id
```

This is why globally duplicated IDs are a real issue.

---

# 27. CART TOTALS

Item count:

```js
cart.reduce(...)
```

Total:

```js
cart.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
  0
)
```

---

# 28. CART UI

The cart is displayed as a fixed bottom bar/panel.

Current CSS characteristics:

```text
position: fixed
bottom: 16px
left: 50%
transform: translateX(-50%)
width: min(850px, calc(100% - 24px))
max-height: 48vh
```

Mobile width:

```text
calc(100% - 16px)
```

The cart contains:

- السلة
- item count
- total
- إتمام الطلب
- عرض السلة

Cart items contain:

- item name
- item price
- +
- quantity
- -
- حذف

---

# 29. CHECKOUT FLOW

Current flow:

```text
Add item
 ↓
Cart
 ↓
إتمام الطلب
 ↓
Checkout form
 ↓
Validation
 ↓
createOrder()
 ↓
Create order object
 ↓
Build WhatsApp message
 ↓
Create WhatsApp URL
 ↓
Success screen
 ↓
الانتقال إلى WhatsApp
```

---

# 30. ORDER TYPES

Current supported types:

```text
داخل المطعم
استلام من المطعم
توصيل
```

## Inside restaurant

Requires:

```text
رقم الطاولة
```

Customer name and phone are not required.

## Pickup

Requires:

```text
اسم الزبون
رقم الهاتف
```

## Delivery

Requires:

```text
اسم الزبون
رقم الهاتف
عنوان التوصيل
```

---

# 31. ORDER SERVICE

Current file:

```text
src/orderService.js
```

This file handles:

- order validation
- order number generation
- item transformation
- subtotal calculation
- order object creation

---

# 32. ORDER STATUSES

Current constants:

```js
export const ORDER_STATUSES = {
  NEW: "new",
  PREPARING: "preparing",
  READY: "ready",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};
```

Available states:

```text
new
preparing
ready
completed
cancelled
```

---

# 33. ORDER NUMBER FORMAT

Current order number format:

```text
PL-XXXXXX-XXX
```

Generated from:

- last 6 digits of `Date.now()`
- random 3-digit number

Example structure:

```text
PL-123456-789
```

---

# 34. ORDER OBJECT

Created orders contain approximately:

```js
{
  orderNumber,
  restaurant: {
    slug,
    name,
  },
  customer: {
    name,
    phone,
  },
  orderType,
  tableNumber,
  address,
  notes,
  items,
  subtotal,
  currency,
  createdAt,
  status,
}
```

Each item contains:

```js
{
  id,
  name,
  price,
  quantity,
  total,
}
```

---

# 35. ORDER VALIDATION

`createOrder()` validates:

### Restaurant

Must exist.

### Customer

Name required except:

```text
داخل المطعم
```

Phone required except:

```text
داخل المطعم
```

### Order type

Must be one of:

```text
داخل المطعم
استلام من المطعم
توصيل
```

### Table

Required for:

```text
داخل المطعم
```

### Address

Required for:

```text
توصيل
```

### Cart

Must contain at least one item.

### Item validation

Every item must have:

- ID
- name
- valid non-negative numeric price
- positive integer quantity

---

# 36. ORDER PERSISTENCE

Current order system does **not** have a backend database.

`createOrder()` only creates a JavaScript object in frontend memory.

The order is then used to construct a WhatsApp message.

Therefore:

```text
No database
No backend order dashboard
No server-side order storage
```

at the current stage.

---

# 37. WHATSAPP ORDER FLOW

The restaurant phone number comes from:

```js
selectedRestaurant.phone
```

The application builds an Arabic order message.

The message includes:

- restaurant name
- order number
- customer information when applicable
- order type
- table number when applicable
- delivery address when applicable
- notes
- ordered items
- quantities
- item totals
- total pieces
- subtotal
- currency
- thank-you message

The URL is generated using WhatsApp's:

```text
wa.me
```

and URL encoding.

---

# 38. CURRENT WHATSAPP UX

There is currently a success overlay after creating the order.

It displays:

- رقم الطلب
- الإجمالي
- نوع الطلب
- الانتقال إلى WhatsApp
- العودة إلى المنيو

### Known historical UX requirement

The desired final user experience is that the checkout process should be simple and should not require an unnecessary second hidden/extra send button.

Historically, the preferred concept was:

```text
إتمام الطلب
```

as the primary checkout action, followed by checkout details and then WhatsApp.

Current `App.jsx`, however, still contains a separate button labeled approximately:

```text
إرسال الطلب إلى WhatsApp
```

### Status

**Potential UX refinement — not currently changed.**

Do not modify until explicitly requested.

---

# 39. CURRENT HEADER

Restaurant pages contain:

- PLATO TECH branding.
- Restaurant logo.
- Restaurant name.
- Restaurant description.
- WhatsApp button.
- Location button.

WhatsApp uses:

```js
selectedRestaurant.phone
```

Location uses:

```js
selectedRestaurant.location
```

---

# 40. DESIGN SYSTEM

Global design is primarily defined in:

```text
src/index.css
```

and:

```text
src/App.css
```

`App.css` is known to be large and has not been fully captured in this continuity file.

---

# 41. GLOBAL CSS

Current design uses CSS variables including:

```css
--primary
--primary-dark
--primary-light
--dark
--dark-soft
--text
--text-soft
--background
--white
--border
--shadow-sm
--shadow-md
--shadow-lg
--radius-sm
--radius-md
--radius-lg
--transition
```

---

# 42. TYPOGRAPHY

Google Fonts currently imported:

```text
Cairo
Inter
```

Arabic interface uses:

```text
Cairo
```

English / numbers use:

```text
Inter
```

General body direction:

```css
direction: rtl;
```

---

# 43. RESTAURANT MENU DESIGN

The current design is intended to look premium and modern.

Major UI components:

- Hero.
- Restaurant logo.
- Restaurant name.
- Restaurant description.
- Contact buttons.
- Sticky categories.
- Product cards.
- Product images.
- Product descriptions.
- Prices.
- Add-to-cart buttons.
- Fixed cart.
- Checkout bottom sheet.
- Order summary.
- WhatsApp order action.

---

# 44. ANIMATIONS

Current design contains animations for:

- Hero content entrance.
- Logo entrance.
- Category entrance.
- Cart appearance.
- Checkout overlay.
- Checkout appearance.
- Product image zoom.
- Product image shine.
- Button hover.
- PLATO landing page entrance.
- PLATO logo gradient.
- PLATO background orb.
- PLATO glow movement.

Reduced-motion support is included:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 45. MOBILE RESPONSIVENESS

Current CSS contains:

```text
@media (max-width: 600px)
```

and:

```text
@media (max-width: 380px)
```

Mobile changes include:

- Smaller hero.
- Smaller logo.
- Smaller typography.
- Smaller product images.
- Smaller product cards.
- Smaller cart.
- Full-width mobile checkout.
- Bottom-sheet checkout layout.

---

# 46. ACCESSIBILITY

Current CSS includes:

```css
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible
```

with visible focus outlines.

Reduced motion is also supported.

---

# 47. PLATO LANDING PAGE

The PLATO home page uses classes including:

```text
.plato-home
.plato-content
.plato-logo
.plato-slogan
.plato-description
.plato-contact
.plato-button
.plato-footer
```

Visual direction:

- Dark technology aesthetic.
- Gradient lighting.
- Animated background grid.
- Floating glow elements.
- Animated PLATO gradient logo.
- Responsive mobile layout.

---

# 48. CURRENT BRAND POSITIONING

The site currently presents PLATO as:

```text
PLATO
YOUR PARTNER FOR TECH SOLUTION
```

with a technology-focused visual identity.

The restaurant page itself is visually separate from the PLATO landing page.

---

# 49. CURRENT KNOWN ISSUES

## Issue 1 — Duplicate item IDs

Some `chef-bashar` products use the same ID.

### Risk

Cart collisions.

### Status

Not fixed.

---

## Issue 2 — Legacy burger-house reference

`menuData.js` references:

```text
burger-house
```

for the default `categories` export, but the current menu object does not contain that slug.

### Status

Not fixed.

---

## Issue 3 — Item availability filtering

Menu data contains:

```text
available
orderEnabled
```

but current rendering does not fully use these flags to filter items.

### Status

Potential future improvement.

---

## Issue 4 — Frontend-only order storage

Orders are currently not persisted in a database.

### Consequence

Once the page/session is gone, the created JavaScript order object is not a persistent restaurant order record.

### Status

Intentional at current prototype stage.

---

## Issue 5 — Current checkout button UX

There is still a dedicated:

```text
إرسال الطلب إلى WhatsApp
```

button in the checkout.

The desired UX may eventually consolidate this with the primary checkout action.

### Status

Not changed yet.

---

# 50. IMPORTANT HISTORICAL BUGS / FIXES

## Cart overlay problem

Earlier, the cart popup interfered with browsing menu items.

### Decision

The cart was changed to a fixed bottom panel.

Current approach:

```text
fixed
bottom
centered
```

with a separate:

```text
عرض السلة
```

control.

---

## Checkout black-box problem

There was previously an issue where the checkout appeared as a black box.

### Status

Reported as fixed.

---

## WhatsApp blank-screen issue

There was previously a problem where the cart/checkout WhatsApp flow resulted in a blank screen.

The project was subsequently structured with:

```text
orderService.js
```

and a success overlay / WhatsApp URL state.

### Status

Current implementation should be treated as the current source of truth and tested before making further changes.

---

# 51. CURRENT STABLE STATE

The user previously reported that the site was generally working well after the UI/CSS fixes.

The current project has progressed beyond a simple static menu into:

```text
PLATO TECH Landing Page
+
Multi-Restaurant Architecture
+
Restaurant Menu
+
Cart
+
Checkout
+
Order Validation
+
Order Number
+
WhatsApp Ordering
```

This is the current major milestone.

---

# 52. WHAT IS ALREADY WORKING CONCEPTUALLY

Current implemented features include:

- React/Vite app.
- PLATO landing page.
- Restaurant slug routing approach.
- Restaurant registry.
- Menu registry.
- Restaurant-specific menus.
- Restaurant-specific theme data.
- Restaurant-specific WhatsApp number.
- Restaurant-specific location.
- Restaurant logo.
- Categories.
- Product cards.
- Product prices.
- Cart.
- Quantity controls.
- Remove item.
- Checkout.
- Three order types.
- Table number support.
- Delivery address support.
- Notes.
- Order validation.
- Order number generation.
- Order object creation.
- WhatsApp message generation.
- WhatsApp URL.
- Success overlay.
- Responsive design.
- Animations.
- Accessibility focus states.
- Reduced-motion support.

---

# 53. CURRENT ARCHITECTURAL DECISION

The project is being built toward a reusable restaurant template.

The desired future workflow is approximately:

```text
Add restaurant
        ↓
Add restaurant settings
        ↓
Add restaurant menu
        ↓
Assign unique slug
        ↓
Deploy
        ↓
Restaurant receives unique URL
        ↓
QR Code points to URL
```

---

# 54. MULTI-RESTAURANT MODEL

The intended architecture is:

```text
PLATO
│
├── /
│    └── PLATO TECH Landing Page
│
├── /chef-bashar
│    └── Chef Bashar Menu
│
├── /restaurant-2
│    └── Restaurant 2 Menu
│
├── /restaurant-3
│    └── Restaurant 3 Menu
│
└── ...
```

The restaurant slug is the key used to retrieve:

```text
restaurant configuration
+
restaurant menu
```

---

# 55. FUTURE SCALABILITY

Possible future features, not yet implemented:

- Restaurant admin dashboard.
- Restaurant owner editing.
- Backend.
- Database.
- Persistent orders.
- Order status management.
- Restaurant-specific dashboard.
- Authentication.
- Menu management.
- Product availability toggles.
- Product ordering toggles.
- QR generation.
- Analytics.
- Order history.
- Customer notifications.
- Multiple WhatsApp numbers.
- Delivery zones.
- Delivery fees.
- Restaurant-specific branding.
- Custom domains/subdomains.

These are future possibilities, not current features.

---

# 56. IMPORTANT DEVELOPMENT RULE

Do not implement future architecture prematurely.

The current priority is to make the core product:

```text
Stable
Simple
Reusable
Sellable
```

before adding unnecessary complexity.

---

# 57. FILE RESPONSIBILITIES

## `src/App.jsx`

Main application component.

Responsible for:

- URL/slug detection.
- Restaurant lookup.
- Home page selection.
- Restaurant page rendering.
- Cart state.
- Checkout state.
- Order creation flow.
- WhatsApp URL creation.
- Main UI.

---

## `src/dataService.js`

Data access bridge.

Responsible for:

- restaurant lookup.
- menu lookup.
- combined restaurant data.

---

## `src/restaurants.js`

Restaurant registry.

Responsible for:

- restaurant information.
- slug.
- contact.
- location.
- logo.
- theme.
- currency.
- ordering capability.

---

## `src/menuData.js`

Menu registry.

Responsible for:

- restaurant menus.
- categories.
- menu items.
- item metadata.
- availability.
- ordering flags.

---

## `src/orderService.js`

Order logic.

Responsible for:

- validation.
- order number.
- item normalization.
- subtotal.
- order object.

---

## `src/index.css`

Global design and restaurant/PLATO styles.

Contains:

- reset.
- variables.
- typography.
- hero.
- categories.
- products.
- cart.
- checkout.
- responsive styles.
- accessibility.
- animations.
- PLATO landing page.

---

## `src/App.css`

Application-specific CSS.

> Full current content has not been captured because the file is very large. Treat the actual file in the project as the source of truth.

---

## `src/main.jsx`

React entry point.

---

## `index.html`

HTML entry point and document metadata.

---

## `vite.config.js`

Vite configuration.

---

## `eslint.config.js`

ESLint configuration.

---

# 58. ESLINT CONFIGURATION

Current configuration uses:

```text
@eslint/js
globals
eslint-plugin-react-hooks
eslint-plugin-react-refresh
```

It uses ESLint Flat Config.

It ignores:

```text
dist
```

and checks:

```text
*.js
*.jsx
```

---

# 59. IMPORTANT USER PREFERENCES FOR DEVELOPMENT

When continuing this project:

### DO

- Explain in Iraqi Arabic when practical.
- Give exact steps.
- Give copy/paste-ready code.
- Make minimal changes.
- Preserve working code.
- Explain exactly where to put changes.
- Test logically before suggesting changes.
- Keep architecture understandable.
- Record major decisions in this file.

### DON'T

- Rewrite the entire project unnecessarily.
- Change working CSS without a reason.
- Introduce libraries without need.
- Introduce a backend prematurely.
- Assume missing files.
- Assume an old version is still current.
- Remove existing functionality casually.
- Replace a working implementation with a more complex one without a clear benefit.

---

# 60. SOURCE OF TRUTH RULE

When continuing development:

Priority should be:

```text
1. Current actual project files
2. Latest user-provided code
3. This continuity file
4. Older conversation history
```

If this file conflicts with current code:

```text
CURRENT CODE WINS
```

Then update this file.

---

# 61. CURRENT PROJECT PHASE

Current phase:

## Functional Prototype / Product Foundation

The project is no longer just a visual demo.

It has:

```text
Data architecture
Restaurant architecture
Menu architecture
Cart
Checkout
Order generation
WhatsApp ordering
PLATO branding
Responsive UI
```

The next phase should focus on stabilization, testing, and making the product repeatable for multiple restaurants.

---

# 62. RECOMMENDED NEXT DEVELOPMENT PRIORITIES

When continuing after this V1 checkpoint, prioritize:

### Priority 1

Verify current build:

```bash
npm run build
```

and:

```bash
npm run lint
```

Fix only real errors.

### Priority 2

Test the complete customer flow:

```text
/
↓
/chef-bashar
↓
Browse menu
↓
Add items
↓
Open cart
↓
Checkout
↓
Choose order type
↓
Enter data
↓
Create order
↓
Success screen
↓
WhatsApp
```

### Priority 3

Fix duplicate menu IDs.

### Priority 4

Review the legacy:

```text
burger-house
```

reference.

### Priority 5

Improve item availability/orderability handling.

### Priority 6

Standardize the restaurant configuration system.

### Priority 7

Only after stability, start preparing the system for the first real restaurant sale.

---

# 63. CURRENT TEST RESTAURANTS

Menu data currently contains:

```text
chef-bashar
coffee-time
pizza-house
test-restaurant
```

Only:

```text
chef-bashar
```

is currently registered as a real restaurant in the supplied `restaurants.js`.

The others should be treated as test/demo data until explicitly registered.

---

# 64. CURRENT REGISTERED RESTAURANT

```text
Restaurant:
Chef Bashar

Slug:
chef-bashar

URL pattern:
<domain>/chef-bashar

Ordering:
Enabled

Currency:
د.ع
```

---

# 65. DEPLOYMENT STATUS

A deployment approach involving Cloudflare Pages has been discussed during the project history.

However, the exact current deployment configuration is **not fully confirmed by the files captured in V1**.

Therefore:

```text
Cloudflare Pages deployment:
Previously discussed / possible
Current exact deployment state:
غير مؤكد
```

Do not assume production deployment is currently configured unless verified.

---

# 66. CURRENT CSS STATUS

`index.css` has been captured.

`App.css` is large and has not been captured completely.

Therefore:

```text
index.css:
Known

App.css:
Actual project file is source of truth
```

Do not recreate or replace `App.css` based only on historical descriptions.

---

# 67. PROJECT CONTINUITY INSTRUCTIONS FOR A NEW CHAT

When opening a new ChatGPT conversation for this project:

1. Upload/provide:
   ```text
   PLATO_PROJECT_CONTEXT.md
   ```

2. If the task concerns specific code, also provide the relevant current file.

3. Tell ChatGPT:
   ```text
   هذا هو ملف استمرارية مشروع PLATO.
   اعتبر الكود الحالي مصدر الحقيقة.
   لا تغيّر أي شيء غير مطلوب.
   نريد تعديلات تدريجية وصغيرة.
   ```

4. If a code file has changed since this context file was created, the new code takes priority.

---

# 68. STANDARD NEW-CHAT PROMPT

Use this prompt when starting a new project conversation:

```text
هذا مشروع PLATO TECH.

أرفقت لك PLATO_PROJECT_CONTEXT.md.
اقرأه بالكامل قبل أن تقترح أي تعديل.

مهم جداً:
- الكود الفعلي الحالي هو مصدر الحقيقة.
- لا تفترض أن أي شيء قديم ما زال موجوداً.
- لا تعيد كتابة المشروع بالكامل.
- أريد تعديلات صغيرة وتدريجية.
- أعطني كود جاهز للنسخ عندما نحتاج تعديل.
- لا تغيّر شيئاً يعمل حالياً إلا إذا كان ضرورياً للمهمة.
- إذا كان هناك تعارض بين ملف الاستمرارية والكود الحالي، اعتمد الكود الحالي ونبّهني إلى التعارض.

بعد قراءة الملف، أخبرني باختصار:
1. أين وصل المشروع؟
2. ما الملفات التي تفهمها؟
3. ما المشاكل المعروفة؟
4. ما آخر خطوة منطقية يمكن تنفيذها؟

ثم انتظر مهمتي ولا تبدأ بتغييرات غير مطلوبة.
```

---

# 69. MAJOR DECISIONS LOG

## Decision 1

Product is sold as a one-off service rather than subscription.

## Decision 2

The system should support multiple restaurants.

## Decision 3

Restaurant identity is based on slug.

## Decision 4

Restaurant and menu data are separated.

## Decision 5

Orders are currently sent through WhatsApp rather than requiring a backend.

## Decision 6

Development should remain incremental and avoid unnecessary rewrites.

## Decision 7

PLATO TECH has a dedicated landing page at `/`.

## Decision 8

Restaurant pages use a separate restaurant-menu visual experience.

---

# 70. CURRENT CHECKPOINT

## CHECKPOINT: V1 — PROJECT FOUNDATION

At this checkpoint we have captured:

```text
App.jsx
dataService.js
orderService.js
restaurants.js
menuData.js
package.json
vite.config.js
index.html
main.jsx
eslint.config.js
index.css
```

`App.css` is not fully captured because of its size.

The project currently represents a functional foundation for a commercial digital restaurant menu product.

---

# 71. DO NOT LOSE THESE FACTS

The following facts are especially important for future conversations:

```text
PLATO is the technology brand.

The product is a restaurant/café digital menu.

The commercial model is one-off service, not subscription.

The target market is Iraq.

The project uses React + Vite.

The application has a PLATO landing page at /.

Restaurant pages use slugs.

Chef Bashar is the currently registered restaurant.

Restaurant data and menu data are separated.

Ordering is currently enabled for Chef Bashar.

The cart uses item.id as its identity.

There are duplicate item IDs in current menu data.

Orders are created in frontend memory.

Orders are sent to the restaurant's WhatsApp.

There is no backend/database yet.

The project should be developed incrementally.

Do not break working functionality.

Current actual code is more authoritative than this document.
```

---

# 72. END OF V1

This file should be updated whenever one of the following occurs:

- New feature added.
- Existing feature removed.
- Architecture changed.
- Restaurant system changed.
- Order system changed.
- WhatsApp flow changed.
- Deployment method changed.
- Major bug fixed.
- Important bug discovered.
- Commercial model changes.
- Major UI decision is finalized.

## Versioning

Use:

```text
V1
V2
V3
...
```

for major continuity updates.

For small changes, update the relevant section without necessarily creating a new version.

---

# END