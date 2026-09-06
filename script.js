/* ═══════════════════════════════════════════════════════
   ICOSIUM STORE — Complete Script with Full i18n & Reviews
═══════════════════════════════════════════════════════ */

const { createClient } = supabase;
const SUPABASE_URL = 'https://vhrvdkaqlrwplkdgwwkl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocnZka2FxbHJ3cGxrZGd3d2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTUyMTAsImV4cCI6MjA3ODk3MTIxMH0.mNAn3qo48y46FDkDOqUVt1xwN2smFMZL1lBNbT0OkTA';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const translations = {
    ar: {
        out_of_stock: "نفاذ الكمية",
        nav_home: "الرئيسية", nav_category: "الفئات", nav_promos: "تخفيضات", nav_reviews: "الآراء", nav_about: "من نحن", nav_contact: "اتصل بنا",
        trust_delivery: "توصيل سريع", trust_secure: "الدفع عند الاستلام", trust_return: "إرجاع 7 أيام", trust_support: "دعم العملاء 7j/7",
        hero_badge: "✦ تشكيلة جديدة 2026", hero_title: "اكتشف مجموعتنا الجديدة", hero_subtitle: "تصميم عصري، جودة استثنائية", hero_btn_buy: "اشتري الآن", hero_btn_about: "قصتنا ←",
        products_title: "منتجاتنا", category_all: "الكل",
        about_title: "عن ICOSIUM",
about_history_text: "في عام 140 قبل الميلاد، أسس الفينيقيون مدينة إيكوسيم (Ikosim) في شمال أفريقيا. ومنذ ذلك الحين، تعاقبت العصور وتغير الناس وتبدلت حتى ملامح المكان، إلا أن روح المكان ظلت حاضرة. تُعد إيكوسيوم (ICOSIUM) علامة تجارية جزائرية جديدة للملابس العصرية المريحة (الكاجوال)، تسعى لإحداث ثورة في عالم الأزياء؛ فهي تستلهم جوهرها من التراث العريق وتمتزج برؤية معاصرة، لتعيد إحياء روح الماضي في عالم اليوم من خلال أفكار مبتكرة وتصاميم مميزة. تخاطب علامتنا التجارية مجتمعاً محدداً يشاركنا قيمنا وإبداعنا وطموحاتنا.",
       about_why_title: "لماذا تختار ICOSIUM؟",
        about_why_text: "لأن ما ترتديه يجب أن يحمل معنى. في ICOSIUM، كل قطعة تحكي قصة أرض وثقافة وجيل لا يخشى التميز.",
        reviews_title: "آراء الزبائن", btn_write_review: "اكتب رأيك", review_form_title: "شاركنا تجربتك",
        contact_title: "اتصل بنا", contact_message_title: "راسلنا مباشرة", contact_send: "إرسال", contact_connect: "ابقَ على تواصل",
      cart_title: "سلتك", cart_total: "الإجمالي", checkout_title: "إتمام الطلب",
        cart_back_home: "العودة إلى الرئيسية", cart_items_title: "المنتجات في السلة", cart_empty: "سلتك فارغة حالياً.",
        checkout_delivery_details: "بيانات التوصيل", form_wilaya: "الولاية:", select_wilaya: "اختر الولاية",
        cart_subtotal: "المجموع الفرعي:", cart_final_total: "المجموع النهائي:",
        form_name: "الاسم:", form_city: "المدينة:", form_review: "الرأي:", form_phone: "الهاتف:", form_address: "العنوان:", delivery_fee: "التوصيل:", form_confirm: "تأكيد الطلب",
        profile_login: "تسجيل الدخول", profile_soon: "قريباً...",
        btn_details: "التفاصيل", btn_add_cart: "أضف إلى السلة", btn_soon: "قريباً",
        cs_title: "قريباً في المتجر", cs_desc: "هذا المنتج غير متوفر للبيع حالياً.",
        modal_delivery: "توصيل سريع", modal_secure: "دفع آمن",size_guide_btn: "دليل المقاسات",
        size_guide_title: "دليل المقاسات",
        size_guide_subtitle: "القياسات بالسنتيمتر (سم) للتيشيرتات",
        th_size: "المقاس",
        th_chest: "العرض (الصدر)",
        th_length: "الطول",
        size_guide_tip: "نصيحة: إذا كنت تفضل مظهراً فضفاضاً (Oversized) ومتردداً بين مقاسين، اختر المقاس الأكبر.",
        alert_color: "يرجى اختيار اللون", alert_size: "يرجى اختيار المقاس", alert_rating: "يرجى تقييم المنتج باختيار النجوم", alert_added: "تمت الإضافة للسلة بنجاح!", alert_order_success: "تم إرسال طلبك بنجاح! شكراً لثقتكم.", alert_review_success: "شكراً لمشاركتنا رأيك!",
        colors: "الألوان:", sizes: "المقاسات:", quantity: "الكمية", search_placeholder: "ابحث عن منتج...",
        footer_rights: "جميع الحقوق محفوظة.",order_success_title: "شكراً لثقتكم بنا!",
        order_success_desc: "تم تسجيل طلبك بنجاح. سيقوم فريق إيكوزيوم (ICOSIUM) بالتواصل معك هاتفياً قريباً لتأكيد الطلب وبدء الشحن.",
        order_success_btn: "العودة إلى المتجر"
       
    },
    fr: {
        out_of_stock: "Rupture de stock",
        nav_home: "Accueil", nav_category: "Catégorie", nav_promos: "Promotions", nav_reviews: "Avis", nav_about: "À Propos", nav_contact: "Contact",
        trust_delivery: "Livraison rapide", trust_secure: "Paiement à la livraison", trust_return: "Retour 7 jours", trust_support: "Support client 7j/7",
        hero_badge: "✦ Nouvelle Collection 2026", hero_title: "Découvrez notre nouvelle collection", hero_subtitle: "Design moderne, qualité supérieure", hero_btn_buy: "Acheter maintenant", hero_btn_about: "Notre histoire →",
        products_title: "Nos Produits", category_all: "Tout",
        about_title: "À propos d'ICOSIUM",
about_history_text: "En 140 av. J.-C., les Phéniciens fondèrent Ikosim en Afrique du Nord. Depuis, le temps a passé, les gens ont changé et le paysage lui-même s'est transformé ; pourtant, l'esprit du lieu demeure. ICOSIUM est une nouvelle marque algérienne de prêt-à-porter décontracté qui aspire à révolutionner l'univers de l'habillement. Puisant son inspiration dans un héritage ancestral tout en s'inscrivant dans une vision moderne, elle insuffle cet esprit d'autrefois au monde d'aujourd'hui grâce à des idées originales et des créations uniques. Notre marque s'adresse à une communauté bien précise qui partage nos valeurs, notre créativité et nos ambitions.",
       about_why_title: "Pourquoi choisir ICOSIUM",
        about_why_text: "Parce que ce que vous portez doit avoir du sens. Chez ICOSIUM, chaque pièce raconte une histoire — celle d'une terre, d'une culture et d'une génération qui n'a pas peur de se démarquer.",
        reviews_title: "Avis Clients", btn_write_review: "Écrire un avis", review_form_title: "Partagez votre avis",
        contact_title: "Contact", contact_message_title: "Contactez-nous directement", contact_send: "Envoyer", contact_connect: "Restons Connectés",
      cart_title: "Votre Panier", cart_total: "Total", checkout_title: "Finaliser votre commande",
        cart_back_home: "Retour à l'accueil", cart_items_title: "Articles dans le panier", cart_empty: "Votre panier est vide.",
        checkout_delivery_details: "Détails de livraison", form_wilaya: "Wilaya", select_wilaya: "Choisir Wilaya",
        cart_subtotal: "Sous-total:", cart_final_total: "Total Final:",
        form_name: "Nom:", form_city: "Ville:", form_review: "Avis:", form_phone: "Tél:", form_address: "Adresse:", delivery_fee: "Livraison:", form_confirm: "Confirmer la commande",
        profile_login: "Connexion", profile_soon: "Prochainement...",
        btn_details: "Détails", btn_add_cart: "Ajouter au panier", btn_soon: "Bientôt",
        cs_title: "Bientôt Disponible", cs_desc: "Ce produit n'est pas encore disponible à la vente.",
        modal_delivery: "Livraison rapide", modal_secure: "Sécurisé",
        alert_color: "Veuillez choisir une couleur", alert_size: "Veuillez choisir une taille", alert_rating: "Veuillez attribuer une note avec les étoiles", alert_added: "Ajouté au panier !", alert_order_success: "Commande envoyée avec succès !", alert_review_success: "Merci pour votre avis !",
        colors: "Couleurs:", sizes: "Tailles:", quantity: "Quantité", search_placeholder: "Rechercher...",
        footer_rights: "Tous droits réservés.",size_guide_btn: "Guide des tailles",
        size_guide_title: "Guide des Tailles",
        size_guide_subtitle: "Mesures standards en centimètres (cm)",
        th_size: "Taille",
        th_chest: "Largeur (Poitrine)",
        th_length: "Longueur",
        size_guide_tip: "Conseil : Si vous hésitez entre deux tailles pour une coupe décontractée, choisissez la taille supérieure.",order_success_title: "Merci pour votre commande !",
        order_success_desc: "Votre commande a été enregistrée avec succès. L'équipe ICOSIUM vous contactera par téléphone très prochainement pour confirmer votre commande.",
        order_success_btn: "Retour à l'accueil"
    },
    en: {
        out_of_stock: "Out of Stock",
        nav_home: "Home", nav_category: "Category", nav_promos: "Promotions", nav_reviews: "Reviews", nav_about: "About", nav_contact: "Contact",
        trust_delivery: "Fast delivery", trust_secure: "Cash on delivery", trust_return: "7-day return", trust_support: "24/7 customer support",
        hero_badge: "✦ New Collection 2026", hero_title: "Discover our new collection", hero_subtitle: "Modern design, premium quality", hero_btn_buy: "Shop now", hero_btn_about: "Our story →",
        products_title: "Our Products", category_all: "All",
        about_title: "About ICOSIUM",
about_history_text: "In 140 B.C.E., the Phoenicians founded Ikosim in North Africa. Since then, time has passed, people have changed, and even the landscape has transformed — yet the spirit of the place remains. ICOSIUM is a new Algerian casual-wear brand that seeks to revolutionize the world of clothing. Inspired by ancient heritage and infused with modern vision, it brings an old spirit into today’s world through original ideas and distinctive designs. Our brand speaks to a specific community that shares our values, creativity, and ambitions.",
   about_why_title: "Why Choose ICOSIUM",
        about_why_text: "Because what you wear should mean something. At ICOSIUM, every piece tells a story — built for those who value identity over trend.",
        reviews_title: "Customer Reviews", btn_write_review: "Write a review", review_form_title: "Share your experience",
        contact_title: "Contact", contact_message_title: "Contact us directly", contact_send: "Send", contact_connect: "Stay Connected",
       cart_title: "Your Cart", cart_total: "Total", checkout_title: "Complete Your Order",
        cart_back_home: "Back to Home", cart_items_title: "Items in Cart", cart_empty: "Your cart is currently empty.",
        checkout_delivery_details: "Delivery Details", form_wilaya: "Wilaya", select_wilaya: "Select Wilaya",
        cart_subtotal: "Subtotal:", cart_final_total: "Final Total:",
        form_name: "Name:", form_city: "City:", form_review: "Review:", form_phone: "Phone:", form_address: "Address:", delivery_fee: "Delivery:", form_confirm: "Confirm Order",
        profile_login: "Login", profile_soon: "Coming soon...",
        btn_details: "Details", btn_add_cart: "Add to cart", btn_soon: "Coming Soon",
        cs_title: "Coming Soon", cs_desc: "This product is not yet available for sale.",
        modal_delivery: "Fast Delivery", modal_secure: "Secured",
        alert_color: "Please select a color", alert_size: "Please select a size", alert_rating: "Please select a star rating", alert_added: "Added to cart!", alert_order_success: "Order placed successfully!", alert_review_success: "Thank you for your review!",
        colors: "Colors:", sizes: "Sizes:", quantity: "Quantity", search_placeholder: "Search...",
        footer_rights: "All rights reserved.",size_guide_btn: "Size Guide",
        size_guide_title: "Size Guide",
        size_guide_subtitle: "Standard measurements in centimeters (cm)",
        th_size: "Size",
        th_chest: "Width (Chest)",
        th_length: "Length",
        size_guide_tip: "Tip: If you are between two sizes and prefer a relaxed fit, go with the larger size.",order_success_title: "Thank you for your order!",
        order_success_desc: "Your order has been placed successfully. The ICOSIUM team will contact you by phone shortly to confirm your order details.",
        order_success_btn: "Back to Home"
    }
};

let currentLanguage = localStorage.getItem('icosium_lang') || 'fr';
let allProducts = [];
let cart = [];

const wilayasData = [
    { id: 1, name: "Adrar", price: 1300 }, { id: 2, name: "Chlef", price: 700 }, { id: 3, name: "Laghouat", price: 850 },
    { id: 4, name: "Oum El Bouaghi", price: 700 }, { id: 5, name: "Batna", price: 700 }, { id: 6, name: "Béjaïa", price: 700 },
    { id: 7, name: "Biskra", price: 850 }, { id: 8, name: "Béchar", price: 1100 }, { id: 9, name: "Blida", price: 500 },
    { id: 10, name: "Bouira", price: 600 }, { id: 11, name: "Tamanrasset", price: 1500 }, { id: 12, name: "Tébessa", price: 750 },
    { id: 13, name: "Tlemcen", price: 750 }, { id: 14, name: "Tiaret", price: 750 }, { id: 15, name: "Tizi Ouzou", price: 600 },
    { id: 16, name: "Alger", price: 400 }, { id: 17, name: "Djelfa", price: 800 }, { id: 18, name: "Jijel", price: 700 },
    { id: 19, name: "Sétif", price: 650 }, { id: 20, name: "Saïda", price: 750 }, { id: 21, name: "Skikda", price: 700 },
    { id: 22, name: "Sidi Bel Abbès", price: 700 }, { id: 23, name: "Annaba", price: 700 }, { id: 24, name: "Guelma", price: 700 },
    { id: 25, name: "Constantine", price: 650 }, { id: 26, name: "Médéa", price: 600 }, { id: 27, name: "Mostaganem", price: 700 },
    { id: 28, name: "M'Sila", price: 750 }, { id: 29, name: "Mascara", price: 700 }, { id: 30, name: "Ouargla", price: 1000 },
    { id: 31, name: "Oran", price: 650 }, { id: 32, name: "El Bayadh", price: 900 }, { id: 33, name: "Illizi", price: 1500 },
    { id: 34, name: "Bordj Bou Arreridj", price: 650 }, { id: 35, name: "Boumerdès", price: 500 }, { id: 36, name: "El Tarf", price: 750 },
    { id: 37, name: "Tindouf", price: 1500 }, { id: 38, name: "Tissemsilt", price: 750 }, { id: 39, name: "El Oued", price: 950 },
    { id: 40, name: "Khenchela", price: 750 }, { id: 41, name: "Souk Ahras", price: 750 }, { id: 42, name: "Tipaza", price: 500 },
    { id: 43, name: "Mila", price: 700 }, { id: 44, name: "Aïn Defla", price: 600 }, { id: 45, name: "Naâma", price: 900 },
    { id: 46, name: "Aïn Témouchent", price: 700 }, { id: 47, name: "Ghardaïa", price: 950 }, { id: 48, name: "Relizane", price: 700 },
    { id: 49, name: "El M'Ghair", price: 950 }, { id: 50, name: "El Meniaa", price: 1100 }, { id: 51, name: "Ouled Djellal", price: 900 },
    { id: 52, name: "Bordj Baji Mokhtar", price: 1600 }, { id: 53, name: "Béni Abbès", price: 1200 }, { id: 54, name: "Timimoun", price: 1300 },
    { id: 55, name: "Touggourt", price: 1000 }, { id: 56, name: "Djanet", price: 1600 }, { id: 57, name: "In Salah", price: 1400 },
    { id: 58, name: "In Guezzam", price: 1600 }
];

// ─── إدارة السلة ───
function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem('icosium_cart');
        cart = saved ? JSON.parse(saved) : [];
    } catch(e) {
        cart = [];
    }
    updateCartCountHeader();
}

function saveCartToStorage() {
    localStorage.setItem('icosium_cart', JSON.stringify(cart));
    updateCartCountHeader();
}

function updateCartCountHeader() {
    const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = totalItems;
    const countElPage = document.getElementById('cart-count-page');
    if (countElPage) countElPage.textContent = totalItems;
}

function addToCart(item) {
    loadCartFromStorage();
    const existingIndex = cart.findIndex(c => c.id === item.id);
    if (existingIndex > -1) {
        cart[existingIndex].qty += item.qty;
        cart[existingIndex].price += item.price;
    } else {
        cart.push(item);
    }
    saveCartToStorage();
    alert(translations[currentLanguage]?.alert_added || "Ajouté au panier !");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
}

// ─── فحص Coming Soon ───
function checkIsComingSoon(product) {
    if (!product.is_coming_soon) return false;
    if (!product.available_at) return true;
    const now = new Date();
    const target = new Date(product.available_at);
    return target > now;
}

// ─── جلب البيانات ───
async function loadInitialData() {
    await getCategories();
    await getProducts();
    await getReviews();
    setLanguage(currentLanguage);
    const savedTheme = localStorage.getItem('icosium_theme') || 'dark';
    applyTheme(savedTheme);
}

async function getCategories() {
    const { data: categories } = await supabaseClient.from('categories').select('*');
    if (!categories) return;

    const filterContainer = document.getElementById('categories-filter');
    const navDropdown = document.querySelector('.dropdown-content');

    if (filterContainer) filterContainer.innerHTML = `<button class="category-btn active" data-id="all">${translations[currentLanguage].category_all}</button>`;
    if (navDropdown) navDropdown.innerHTML = '';

    if (filterContainer && filterContainer.querySelector('[data-id="all"]')) {
        filterContainer.querySelector('[data-id="all"]').addEventListener('click', () => filterProducts('all'));
    }

    categories.forEach(cat => {
        const name = cat[`name_${currentLanguage}`] || cat.name_fr || cat.name;
        if (filterContainer) {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = name;
            btn.addEventListener('click', () => {
                filterProducts(cat.id);
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
            filterContainer.appendChild(btn);
        }
        if (navDropdown) {
            const link = document.createElement('a');
            link.href = "index.html#products-section";
            link.textContent = name;
            link.addEventListener('click', () => {
                filterProducts(cat.id);
                document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
            });
            navDropdown.appendChild(link);
        }
    });
}

async function getProducts() {
    const { data: products, error } = await supabaseClient
        .from('products')
        .select('*')
        .eq('is_deleted', false)
        .order('id', { ascending: false });

    if (error) {
        console.error("Error loading products:", error);
        return;
    }
    allProducts = products || [];
    renderProducts(allProducts);
}

async function getReviews() {
    const container = document.querySelector('.reviews-container');
    if (!container) return;
    const { data: reviews } = await supabaseClient.from('reviews').select('*').eq('is_approved', true).order('created_at', { ascending: false });
    if (!reviews || !reviews.length) {
        container.innerHTML = '<p style="text-align:center; grid-column:1/-1; color:var(--color-text-muted);">Aucun avis pour le moment.</p>';
        return;
    }

    container.innerHTML = reviews.map(r => {
        let stars = '';
        for (let i = 1; i <= 5; i++) stars += i <= r.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
        return `
            <div class="review-card">
                <div class="review-header">
                    <div><h4>${r.reviewer_name}</h4><small>${r.reviewer_location || ''}</small></div>
                    <div class="review-stars">${stars}</div>
                </div>
                <p>"${r.review_text}"</p>
            </div>
        `;
    }).join('');
}

// ─── رسم كروت المنتجات ───
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (!products.length) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">Aucun produit disponible.</p>';
        return;
    }

    const t = translations[currentLanguage];

    products.forEach(p => {
        const isOutOfStock = p.stock <= 0;
        const isComingSoon = checkIsComingSoon(p);

        const card = document.createElement('div');
        card.className = `product-card ${isOutOfStock ? 'out-of-stock' : ''} ${isComingSoon ? 'is-coming-soon' : ''}`;

        card.innerHTML = `
            ${isComingSoon ? '<span class="card-cs-tag">COMING SOON</span>' : (isOutOfStock ? `<div class="out-of-stock-badge">${t.out_of_stock}</div>` : '')}
            <img src="${p.image_url || 'images/logo3.png'}" class="${isComingSoon ? 'is-coming-soon-blur' : ''}" alt="${p.name}">
            <div class="product-details">
                <h3 class="product-name">${p.name}</h3>
                <p class="product-price">${isComingSoon ? (t.btn_soon || 'Bientôt') : p.price + ' DZD'}</p>
                <div class="product-actions">
                    <button class="details-btn">${t.btn_details}</button>
                    <button class="add-to-cart-btn" ${isOutOfStock || isComingSoon ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                        ${isComingSoon ? t.btn_soon : (isOutOfStock ? t.out_of_stock : t.btn_add_cart)}
                    </button>
                </div>
            </div>
        `;

        card.querySelector('.details-btn').addEventListener('click', () => openDetails(p));
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (!isComingSoon && !isOutOfStock) {
            addBtn.addEventListener('click', () => openDetails(p));
        }

        grid.appendChild(card);
    });
}

function filterProducts(catId) {
    renderProducts(catId === 'all' ? allProducts : allProducts.filter(p => p.category_id == catId));
}

// ─── نافذة تفاصيل المنتج (تنقل بالأسهم + مربعات صور قابلة للنقر بدون زوم) ───
let countdownInterval = null;

function openDetails(p) {
    const modal = document.getElementById('product-details-modal');
    if (!modal) return;

    const overlay = document.getElementById('modal-coming-soon-overlay');
    const imageContainer = modal.querySelector('.modal-image-container');
    const infoContainer = modal.querySelector('.modal-info-container');
    const countdownEl = document.getElementById('cs-countdown');
    const t = translations[currentLanguage];

    if (countdownInterval) clearInterval(countdownInterval);

    const isComingSoon = checkIsComingSoon(p);

    if (isComingSoon) {
        if (imageContainer) imageContainer.classList.add('is-coming-soon-blur');
        if (infoContainer) infoContainer.classList.add('is-coming-soon-blur');
        if (overlay) overlay.style.display = 'flex';

        if (p.available_at && countdownEl) {
            countdownEl.style.display = 'block';
            const targetTime = new Date(p.available_at).getTime();

            const updateTimer = () => {
                const now = new Date().getTime();
                const diff = targetTime - now;

                if (diff <= 0) {
                    clearInterval(countdownInterval);
                    if (overlay) overlay.style.display = 'none';
                    if (imageContainer) imageContainer.classList.remove('is-coming-soon-blur');
                    if (infoContainer) infoContainer.classList.remove('is-coming-soon-blur');
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const mins = Math.floor((diff % (1000 * 60)) / (1000 * 60));
                const secs = Math.floor((diff % (1000 * 60)) / 1000);

                countdownEl.textContent = `${days}j ${hours}h ${mins}m ${secs}s`;
            };
            updateTimer();
            countdownInterval = setInterval(updateTimer, 1000);
        } else if (countdownEl) {
            countdownEl.style.display = 'none';
        }
    } else {
        if (imageContainer) imageContainer.classList.remove('is-coming-soon-blur');
        if (infoContainer) infoContainer.classList.remove('is-coming-soon-blur');
        if (overlay) overlay.style.display = 'none';
    }

    // 1. تجميع الصور الرئيسية والإضافية
    const mainImg = document.getElementById('modal-product-image');
    const thumbStrip = document.getElementById('modal-thumbnails-strip');
    const prevBtn = document.getElementById('modal-prev-img');
    const nextBtn = document.getElementById('modal-next-img');
    thumbStrip.innerHTML = '';

    let gallery = [];
    if (p.image_url) gallery.push(p.image_url);
    if (p.extra_images) {
        let extras = p.extra_images;
        if (typeof extras === 'string') {
            try { extras = JSON.parse(extras); } catch (e) { extras = []; }
        }
        if (Array.isArray(extras)) {
            gallery = gallery.concat(extras);
        }
    }
    if (gallery.length === 0) gallery.push('images/logo3.png');

    let currentImgIndex = 0;

    // دالة تبديل الصورة وتحديث المربعات النشطة
    const updateActiveImage = (index) => {
        currentImgIndex = (index + gallery.length) % gallery.length;
        mainImg.src = gallery[currentImgIndex];
        
        thumbStrip.querySelectorAll('.thumb-item').forEach((el, idx) => {
            el.classList.toggle('active', idx === currentImgIndex);
        });
    };

    updateActiveImage(0);

    // تفعيل الأسهم ومربعات الصور عند وجود أكثر من صورة
    if (gallery.length > 1) {
        if (prevBtn) {
            prevBtn.style.display = 'flex';
            prevBtn.onclick = (e) => {
                e.stopPropagation();
                updateActiveImage(currentImgIndex - 1);
            };
        }
        if (nextBtn) {
            nextBtn.style.display = 'flex';
            nextBtn.onclick = (e) => {
                e.stopPropagation();
                updateActiveImage(currentImgIndex + 1);
            };
        }

        // رسم مربعات الصور مع حدث النقر المباشر
        gallery.forEach((imgSrc, idx) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
            thumb.title = `Photo ${idx + 1}`;
            thumb.onclick = (e) => {
                e.stopPropagation();
                updateActiveImage(idx);
            };
            thumbStrip.appendChild(thumb);
        });
        thumbStrip.style.display = 'flex';
    } else {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        thumbStrip.style.display = 'none';
    }

    // تم حذف مستمعات أحداث الـ Zoom بالماوس (لا مزيد من التكبير المزعج)

    // 2. الأسعار والخصومات
    document.getElementById('modal-product-name').textContent = p.name;
    document.getElementById('modal-product-desc').textContent = p.description || '';
    document.getElementById('modal-product-price').textContent = p.price + ' DZD';

    const oldPriceEl = document.getElementById('modal-product-old-price');
    const badgeEl = document.getElementById('modal-discount-badge');
    const comparePrice = parseFloat(p.compare_at_price || p.compare_price);

    if (comparePrice && comparePrice > p.price) {
        oldPriceEl.textContent = comparePrice + ' DZD';
        oldPriceEl.style.display = 'inline';

        const discountPct = Math.round(((comparePrice - p.price) / comparePrice) * 100);
        badgeEl.textContent = `-${discountPct}%`;
        badgeEl.style.display = 'block';
    } else {
        oldPriceEl.style.display = 'none';
        badgeEl.style.display = 'none';
    }

   // 3. خيارات الألوان والمقاسات والكمية
    const opts = document.getElementById('modal-product-options');
    if (opts) {
        opts.innerHTML = '';
        let parsedSizes = [];
        if (p.sizes) {
            try { parsedSizes = typeof p.sizes === 'string' ? JSON.parse(p.sizes) : p.sizes; } catch(e) {}
        }

        let availableColors = [];
        let availableSizes = [];
        if (Array.isArray(parsedSizes)) {
            parsedSizes.forEach(s => {
                if (s.color && s.color.trim() && !availableColors.includes(s.color.trim())) {
                    availableColors.push(s.color.trim());
                }
                if (s.size && s.size.trim() && !availableSizes.includes(s.size.trim())) {
                    availableSizes.push(s.size.trim());
                }
            });
        }

        // خريطة تحويل الأسماء إلى أكواد الألوان
        const getColorHex = (name) => {
            if (!name) return '#222222';
            const clean = name.trim().toLowerCase();
            const colorMap = {
                'noir': '#111111', 'black': '#111111', 'أسود': '#111111', 'اسود': '#111111',
                'blanc': '#ffffff', 'white': '#ffffff', 'أبيض': '#ffffff', 'ابيض': '#ffffff',
                'vert': '#0a6e6e', 'green': '#0a6e6e', 'أخضر': '#0a6e6e', 'اخضر': '#0a6e6e',
                'bleu': '#1e3a8a', 'blue': '#1e3a8a', 'أزرق': '#1e3a8a', 'ازرق': '#1e3a8a',
                'gris': '#888888', 'grey': '#888888', 'gray': '#888888', 'رمادي': '#888888',
                'rouge': '#dc2626', 'red': '#dc2626', 'أحمر': '#dc2626', 'احمر': '#dc2626',
                'beige': '#f5f5dc', 'بيج': '#f5f5dc', 'marron': '#78350f', 'brown': '#78350f', 'بني': '#78350f'
            };
            return colorMap[clean] || (clean.startsWith('#') ? clean : '#444444');
        };

        let html = '';
        if (availableColors.length > 0) {
            html += `
                <div class="modal-opts-group">
                    <label style="font-weight:700; display:block; margin-bottom:8px;">${t.colors}</label>
                    <div class="product-colors-v2">
                        ${availableColors.map((c, i) => `
                            <div class="color-option-wrapper ${i === 0 ? 'selected' : ''}" data-val="${c}" data-index="${i}">
                                <span class="color-circle-btn" style="background-color: ${getColorHex(c)};"></span>
                                <span class="color-name-label">${c}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (availableSizes.length > 0) {
            html += `
                <div class="modal-opts-group" style="margin-top:14px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <label style="font-weight:700; margin:0;">${t.sizes}</label>
                        <button type="button" onclick="openSizeGuide()" class="size-guide-link">
                            <i class="fas fa-ruler"></i> <span>${t.size_guide_btn || 'Guide des tailles'}</span>
                        </button>
                    </div>
                    <div class="product-sizes" style="display:flex; gap:8px; flex-wrap:wrap;">
                        ${availableSizes.map((s, i) => `<span class="size-box ${i === 0 ? 'selected' : ''}" data-val="${s}">${s}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        html += `
            <div class="modal-opts-group" style="margin-top:14px;">
                <label style="font-weight:700; display:block; margin-bottom:8px;">${t.quantity}</label>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <button type="button" id="qty-minus" style="width:36px; height:36px; border:1px solid var(--color-border); background:var(--color-bg); border-radius:8px; cursor:pointer; font-weight:bold; color:var(--color-text);">-</button>
                    <input type="number" id="modal-product-qty" value="1" min="1" max="50" style="width:60px; height:36px; text-align:center; border:1px solid var(--color-border); border-radius:8px; background:var(--color-bg-card); color:var(--color-text); font-weight:bold;">
                    <button type="button" id="qty-plus" style="width:36px; height:36px; border:1px solid var(--color-border); background:var(--color-bg); border-radius:8px; cursor:pointer; font-weight:bold; color:var(--color-text);">+</button>
                </div>
            </div>
        `;
        opts.innerHTML = html;

        // تعيين القيم الافتراضية
        let selColor = availableColors.length > 0 ? availableColors[0] : 'Standard';
        let selSize = availableSizes.length > 0 ? availableSizes[0] : 'Standard';

        // تفعيل النقر على دوائر الألوان وتبديل الصورة
        opts.querySelectorAll('.color-option-wrapper').forEach(wrap => {
            wrap.addEventListener('click', () => {
                opts.querySelectorAll('.color-option-wrapper').forEach(w => w.classList.remove('selected'));
                wrap.classList.add('selected');
                selColor = wrap.dataset.val;

                const colorIdx = parseInt(wrap.dataset.index, 10);
                // تبديل صورة التيشيرت المعروضة إذا كان المعرض يحتوي صورة لهذا اللون
                if (gallery && gallery[colorIdx]) {
                    updateActiveImage(colorIdx);
                }
            });
        });

        // تفعيل النقر على المقاسات
        opts.querySelectorAll('.size-box').forEach(b => {
            b.addEventListener('click', e => {
                opts.querySelectorAll('.size-box').forEach(x => x.classList.remove('selected'));
                e.target.classList.add('selected');
                selSize = e.target.dataset.val;
            });
        });

        // عداد الكمية
        const qtyInput = document.getElementById('modal-product-qty');
        document.getElementById('qty-minus')?.addEventListener('click', () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val > 1) qtyInput.value = val - 1;
        });
        document.getElementById('qty-plus')?.addEventListener('click', () => {
            let val = parseInt(qtyInput.value) || 1;
            qtyInput.value = val + 1;
        });

        // زر إضافة للسلة
        const cartBtn = document.getElementById('modal-add-to-cart-btn');
        const newCartBtn = cartBtn.cloneNode(true);
        cartBtn.parentNode.replaceChild(newCartBtn, cartBtn);

        if (isComingSoon) {
            newCartBtn.disabled = true;
            newCartBtn.style.opacity = '0.5';
            newCartBtn.textContent = t.btn_soon;
        } else {
            newCartBtn.disabled = false;
            newCartBtn.style.opacity = '1';
            newCartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${t.btn_add_cart}`;
            newCartBtn.addEventListener('click', () => {
                if (availableColors.length > 0 && !selColor) return alert(t.alert_color);
                if (availableSizes.length > 0 && !selSize) return alert(t.alert_size);

                const quantity = parseInt(qtyInput?.value, 10) || 1;
                addToCart({
                    id: `${p.id}-${selColor}-${selSize}`,
                    product_id: p.id,
                    name: p.name,
                    image_url: mainImg.src || p.image_url || 'images/logo3.png',
                    color: selColor,
                    size: selSize,
                    qty: quantity,
                    unit_price: parseFloat(p.price),
                    price: parseFloat(p.price) * quantity
                });
                modal.style.display = 'none';
            });
        }
    }

    modal.style.display = 'block';
}
// ─── صفحة السلة ───
function populateWilayas() {
    const wilayaSelect = document.getElementById('checkout-wilaya');
    if (!wilayaSelect) return;

    wilayaSelect.innerHTML = '<option value="" disabled selected>Choisir Wilaya</option>';
    wilayasData.forEach(w => {
        const opt = document.createElement('option');
        opt.value = w.price;
        opt.textContent = `${w.id} - ${w.name} (+${w.price} DA)`;
        wilayaSelect.appendChild(opt);
    });

    wilayaSelect.addEventListener('change', (e) => {
        const fee = parseFloat(e.target.value) || 0;
        const feeDisplay = document.getElementById('delivery-fee-display');
        if (feeDisplay) feeDisplay.textContent = fee;
        calcFinalTotalPage();
    });
}

// ─── دوال عرض الصورة المكبرة بالسلة ───
window.openImageLightbox = function(src) {
    const modal = document.getElementById('image-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    if (modal && img) {
        img.src = src;
        modal.style.display = 'flex';
    }
};

window.closeImageLightbox = function() {
    const modal = document.getElementById('image-lightbox-modal');
    if (modal) {
        modal.style.display = 'none';
    }
};

// إغلاق النافذة عند النقر على الخلفية المظلمة
document.addEventListener('click', (e) => {
    const modal = document.getElementById('image-lightbox-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ─── رسم عناصر السلة مع خاصية تكبير الصورة ───
function renderCartPage() {
    const container = document.getElementById('cart-items-container-page');
    const totalEl = document.getElementById('cart-total-price-page');
    if (!container) return;

    const t = translations[currentLanguage];
    container.innerHTML = '';
    let subtotal = 0;

    if (!cart.length) {
        container.innerHTML = `<p style="text-align:center; padding:30px; color:var(--color-text-muted);">${t.cart_empty}</p>`;
    } else {
        const colorLabel = currentLanguage === 'ar' ? 'اللون' : (currentLanguage === 'en' ? 'Color' : 'Couleur');
        const sizeLabel = currentLanguage === 'ar' ? 'المقاس' : (currentLanguage === 'en' ? 'Size' : 'Taille');
        const qtyLabel = currentLanguage === 'ar' ? 'الكمية' : (currentLanguage === 'en' ? 'Qty' : 'Qté');

        cart.forEach((item, i) => {
            subtotal += item.price;
            const imgSrc = item.image_url || 'images/logo3.png';

            container.innerHTML += `
                <div class="cart-item-row" style="display:flex; justify-content:space-between; align-items:center; padding:16px 0; border-bottom:1px solid var(--color-border); gap: 14px;">
                    <div style="display:flex; align-items:center; gap:14px; min-width:0;">
                        <!-- الصورة المصغرة القابلة للنقر للرؤية بوضوح -->
                        <img src="${imgSrc}" alt="${item.name}" 
                             class="cart-thumb-click"
                             onclick="openImageLightbox('${imgSrc}')"
                             title="${currentLanguage === 'ar' ? 'اضغط لتكبير الصورة' : 'Cliquer pour agrandir'}"
                             style="width: 65px; height: 65px; border-radius: 12px; object-fit: cover; border: 1.5px solid var(--color-border); flex-shrink: 0; background: var(--color-bg);"
                             onerror="this.src='images/logo3.png'">
                        
                        <div class="cart-item-info">
                            <h4 style="margin:0 0 4px 0; font-size:1rem; font-weight:700;">${item.name}</h4>
                            <small style="color:var(--color-text-muted); font-size:0.82rem; display:block;">
                                ${colorLabel}: <strong>${item.color || '-'}</strong> | ${sizeLabel}: <strong>${item.size || '-'}</strong> | ${qtyLabel}: <strong>${item.qty || 1}</strong>
                            </small>
                        </div>
                    </div>

                    <div style="display:flex; align-items:center; gap:16px; flex-shrink: 0;">
                        <span style="font-weight:700; color:var(--color-primary); font-size: 1.05rem; white-space: nowrap;">${item.price} DZD</span>
                        <i class="fas fa-trash remove-btn" title="Supprimer" onclick="removeFromCart(${i})"></i>
                    </div>
                </div>
            `;
        });
    }

    if (totalEl) totalEl.textContent = subtotal;
    calcFinalTotalPage();
}

function calcFinalTotalPage() {
    const totalEl = document.getElementById('cart-total-price-page');
    const feeDisplay = document.getElementById('delivery-fee-display');
    const finalDisplay = document.getElementById('final-total-price');

    if (!totalEl || !feeDisplay || !finalDisplay) return;
    const subtotal = parseFloat(totalEl.textContent) || 0;
    const fee = parseFloat(feeDisplay.textContent) || 0;
    finalDisplay.textContent = subtotal + fee;
}

// ─── إدارة اللغات والثيم ───
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('icosium_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][k]) {
            el.textContent = translations[lang][k];
        }
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput && translations[lang]?.search_placeholder) {
        searchInput.placeholder = translations[lang].search_placeholder;
    }

    const langSelect = document.getElementById('language-switcher');
    if (langSelect) langSelect.value = lang;

    if (allProducts.length > 0) {
        renderProducts(allProducts);
    }
}

function applyTheme(theme) {
    const icon = document.querySelector('#dark-mode-toggle i');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    } else {
        document.body.classList.remove('dark-mode');
        if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('icosium_theme', newTheme);
    applyTheme(newTheme);
}

// ─── التهيئة عند تحميل الصفحة ───
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();

    if (window.location.pathname.includes('cart.html')) {
        populateWilayas();
        renderCartPage();

        const form = document.getElementById('checkout-form-page');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                if (!cart.length) return alert('Votre panier est vide !');

                const btn = document.getElementById('checkout-submit-btn');
                btn.disabled = true;
                btn.textContent = "Envoi en cours...";

                const wilayaSelect = document.getElementById('checkout-wilaya');
                const wilayaName = wilayaSelect.options[wilayaSelect.selectedIndex].text.split(' (+')[0];

                const orderData = {
                    customer_name: document.getElementById('checkout-name').value.trim(),
                    customer_phone: document.getElementById('checkout-phone').value.trim(),
                    customer_address: `${wilayaName} - ${document.getElementById('checkout-address').value.trim()}`,
                    items: cart,
                    total_price: parseFloat(document.getElementById('final-total-price').textContent) || 0,
                    delivery_fee: parseFloat(document.getElementById('delivery-fee-display').textContent) || 0,
                    status: 'Pending'
                };

              const { data, error } = await supabaseClient.from('orders').insert([orderData]).select();

                if (error) {
                    console.error("Order error:", error);
                    alert("Erreur lors de la commande. Veuillez réessayer.");
                    btn.disabled = false;
                    btn.textContent = translations[currentLanguage]?.form_confirm || "Confirmer la commande";
                } else {
                    // تفريغ السلة وحفظها
                    cart = [];
                    saveCartToStorage();

                    // تعبئة نصوص اللافتة حسب اللغة المختارة
                    const t = translations[currentLanguage];
                    document.getElementById('success-title').textContent = t.order_success_title;
                    document.getElementById('success-msg').textContent = t.order_success_desc;
                    document.getElementById('success-btn-text').textContent = t.order_success_btn;

                    // إظهار اللافتة الترحيبية
                    const successModal = document.getElementById('order-success-modal');
                    if (successModal) {
                        successModal.style.display = 'flex';
                    }
                }
            });
        }
    } else {
        loadInitialData();
    }

    // زر السلة العلوي
    const cartButton = document.getElementById('cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }

    // زر تبديل اللغة والثيم
    document.getElementById('dark-mode-toggle')?.addEventListener('click', toggleTheme);
    document.getElementById('language-switcher')?.addEventListener('change', e => setLanguage(e.target.value));

    // زر البحث
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-button');
    if (searchInput) {
        const doSearch = () => {
            const q = searchInput.value.toLowerCase().trim();
            renderProducts(allProducts.filter(p => p.name.toLowerCase().includes(q) || (p.sku && p.sku.toLowerCase().includes(q))));
        };
        searchInput.addEventListener('input', doSearch);
        searchBtn?.addEventListener('click', doSearch);
    }

    // 💡 تفعيل زر آراء الزبائن بشكل مضمون وقوي 💡
    const openReviewBtn = document.getElementById('open-review-modal-btn');
    const reviewModal = document.getElementById('review-modal');
    if (openReviewBtn && reviewModal) {
        openReviewBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            reviewModal.style.display = 'block';
        };
    }

    // تقييم النجوم
    const stars = document.querySelectorAll('.star-input');
    let currentRating = 0;
    if (stars.length > 0) {
        stars.forEach(s => s.addEventListener('click', () => {
            currentRating = parseInt(s.dataset.value, 10);
            const valInput = document.getElementById('rating-value');
            if (valInput) valInput.value = currentRating;
            const ratingTxt = document.getElementById('rating-text');
            if (ratingTxt) ratingTxt.textContent = `${currentRating}/5`;
            stars.forEach(st => {
                const val = parseInt(st.dataset.value, 10);
                st.querySelector('i').className = val <= currentRating ? 'fas fa-star' : 'far fa-star';
            });
        }));
    }

    // إرسال التقييم
    const reviewForm = document.getElementById('add-review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const ratingVal = document.getElementById('rating-value')?.value;
            if (!ratingVal || ratingVal === '0') {
                return alert(translations[currentLanguage]?.alert_rating || 'Veuillez sélectionner une note.');
            }

          // إرسال التقييم بحالة انتظار الموافقة (is_approved: false)
            const data = {
                reviewer_name: document.getElementById('review-name').value.trim(),
                reviewer_location: document.getElementById('review-location').value.trim(),
                review_text: document.getElementById('review-text').value.trim(),
                rating: parseInt(ratingVal, 10),
                is_approved: false // 💡 لن يظهر في المتجر حتى يوافق عليه المسؤول من لوحة التحكم
            };

            const { error } = await supabaseClient.from('reviews').insert([data]);
            if (!error) {
                // رسالة واضحة للزبون بأن رأيه قيد المراجعة
                const successMsg = currentLanguage === 'ar' 
                    ? "شكراً لك! تم إرسال تقييمك وسيظهر بعد مراجعته من الإدارة." 
                    : (currentLanguage === 'en' 
                        ? "Thank you! Your review has been submitted and will appear after moderation." 
                        : "Merci ! Votre avis a été envoyé et apparaîtra après validation.");
                
                alert(successMsg);
                reviewForm.reset();
                
                // إعادة تصفير النجوم
                currentRating = 0;
                const valInput = document.getElementById('rating-value');
                if (valInput) valInput.value = '';
                const ratingTxt = document.getElementById('rating-text');
                if (ratingTxt) ratingTxt.textContent = '0/5';
                stars.forEach(st => st.querySelector('i').className = 'far fa-star');

                if (reviewModal) reviewModal.style.display = 'none';
                getReviews();
            } else {
                alert("Erreur lors de l'envoi de l'avis.");
            }
        });
    }
// ─── تفعيل إرسال رسائل اتصل بنا إلى الإيميل عبر EmailJS ───
    (function() {
        // ضع هنا مفتاحك العام Public Key من EmailJS
        emailjs.init("pYILGoTMyWH89qbUy");
    })();

    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');
    const contactBtn = document.getElementById('contact-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            contactBtn.disabled = true;
            const originalBtnText = contactBtn.textContent;
            contactBtn.textContent = currentLanguage === 'ar' ? "جاري الإرسال..." : "Envoi en cours...";

            const templateParams = {
                name: document.getElementById('contact-name').value.trim(),
                email: document.getElementById('contact-email').value.trim(),
                message: document.getElementById('contact-message').value.trim()
            };

            // استبدل YOUR_SERVICE_ID و YOUR_TEMPLATE_ID بالأكواد الخاصة بك
            emailjs.send('service_o6b7q2h', 'template_wfrqo0p', templateParams)
                .then(function(response) {
                    const successMsg = currentLanguage === 'ar' 
                        ? "تم إرسال رسالتك بنجاح! سنرد عليك قريباً." 
                        : (currentLanguage === 'en' 
                            ? "Your message has been sent successfully!" 
                            : "Votre message a été envoyé avec succès !");

                    contactStatus.style.color = "var(--color-primary, #00c896)";
                    contactStatus.textContent = successMsg;
                    contactForm.reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    const errorMsg = currentLanguage === 'ar' 
                        ? "حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً." 
                        : "Une erreur est survenue lors de l'envoi.";

                    contactStatus.style.color = "#f87171";
                    contactStatus.textContent = errorMsg;
                })
                .finally(function() {
                    contactBtn.disabled = false;
                    contactBtn.textContent = originalBtnText;
                });
        });
    }
    // إغلاق النوافذ
    document.querySelectorAll('.close-btn').forEach(b => {
        b.addEventListener('click', (e) => {
            const m = e.target.closest('.modal');
            if (m) m.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
window.openSizeGuide = function() {
    const modal = document.getElementById('size-guide-modal');
    if (modal) modal.style.display = 'flex';
};

window.closeSizeGuide = function() {
    const modal = document.getElementById('size-guide-modal');
    if (modal) modal.style.display = 'none';
};
    // القائمة الجانبية في الهاتف
    const nav = document.getElementById('main-nav');
    const overlay = document.getElementById('nav-overlay');
    document.getElementById('burger-menu-btn')?.addEventListener('click', () => { nav?.classList.add('nav-active'); overlay?.classList.add('overlay-active'); });
    const closeMenu = () => { nav?.classList.remove('nav-active'); overlay?.classList.remove('overlay-active'); };
    document.getElementById('close-nav-btn')?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    // زر النزول للمنتجات
    document.getElementById('scroll-to-products')?.addEventListener('click', () => {
        document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
    });
});
