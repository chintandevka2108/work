// Ultra-Enhanced Blinkit Clone JavaScript - Complete Combined Version

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});

// Custom Cursor Animation
function initCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const follower = document.querySelector(".cursor-follower");

  if (!cursor || !follower) return;

  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
  });

  // Smooth follower animation
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    follower.style.transform = `translate(${followerX - 20}px, ${
      followerY - 20
    }px)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover effects for all interactive elements
  const hoverElements = document.querySelectorAll(
    "button, a, .product-card, .category-card, .product-card-enhanced, .product-card-ultra, .review-card, .review-card-ultra"
  );
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      follower.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      follower.classList.remove("hover");
    });
  });
}

// Loading Screen
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 3000);
});

// Falling Groceries Animation
function createFallingGroceries() {
  const container = document.getElementById("fallingGroceries");
  const groceries = [
    "🍎",
    "🥕",
    "🥬",
    "🍌",
    "🥛",
    "🍞",
    "🥤",
    "🍫",
    "🧴",
    "🥪",
  ];

  function createFallingItem() {
    const item = document.createElement("div");
    item.className = "falling-item";
    item.textContent = groceries[Math.floor(Math.random() * groceries.length)];
    item.style.left = Math.random() * 100 + "%";
    item.style.animationDuration = Math.random() * 3 + 5 + "s";
    item.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(item);

    // Remove item after animation
    setTimeout(() => {
      if (item.parentNode) {
        item.parentNode.removeChild(item);
      }
    }, 8000);
  }

  // Create falling items at intervals
  setInterval(createFallingItem, 2000);
}

// Start falling groceries animation
createFallingGroceries();

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Animated Counter
function initCounters() {
  const counters = document.querySelectorAll(".counter-number");
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-target"));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };

        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

// Ultra Enhanced Products Swiper
function initUltraProductsSwiper() {
  const ultraSwiper = new Swiper(".products-swiper-ultra", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-ultra",
      prevEl: ".swiper-button-prev-ultra",
    },
    pagination: {
      el: ".swiper-pagination-ultra",
      clickable: true,
      dynamicBullets: true,
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        effect: "slide",
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        effect: "slide",
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        effect: "slide",
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
        effect: "slide",
      },
    },
    on: {
      slideChange: function () {
        // Add entrance animation to active slide
        const activeSlide = this.slides[this.activeIndex];
        const productCard = activeSlide.querySelector(".product-card-ultra");
        if (productCard) {
          productCard.style.animation = "slideInUp 0.8s ease-out";
        }
      },
    },
  });
}

// Enhanced Products Swiper
function initEnhancedProductsSwiper() {
  const productsSwiper = new Swiper(".products-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    pagination: {
      el: ".swiper-pagination-custom",
      clickable: true,
      dynamicBullets: true,
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        effect: "slide",
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        effect: "slide",
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        effect: "slide",
      },
    },
    on: {
      slideChange: function () {
        // Add entrance animation to active slide
        const activeSlide = this.slides[this.activeIndex];
        const productCard = activeSlide.querySelector(
          ".product-card-enhanced, .product-card"
        );
        if (productCard) {
          productCard.style.animation = "slideInUp 0.6s ease-out";
        }
      },
    },
  });
}

// Fallback for original swiper if enhanced version not found
function initOriginalProductsSwiper() {
  const productsSwiper = new Swiper(".products-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

// Ultra Reviews Swiper
function initUltraReviewsSwiper() {
  const reviewsSwiper = new Swiper(".reviews-swiper-ultra", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next-review",
      prevEl: ".swiper-button-prev-review",
    },
    pagination: {
      el: ".swiper-pagination-review",
      clickable: true,
    },
    effect: "cards",
    cardsEffect: {
      rotate: true,
      perSlideOffset: 8,
      perSlideRotate: 2,
      slideShadows: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        effect: "slide",
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        effect: "slide",
      },
    },
  });
}

// Reviews Swiper
function initReviewsSwiper() {
  const reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-reviews",
      clickable: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        effect: "slide",
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        effect: "slide",
      },
    },
  });
}

// Search Functionality
const searchInput = document.querySelector(".search-input");
if (searchInput) {
  searchInput.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.02)";
    this.parentElement.style.boxShadow = "0 0 25px rgba(16, 185, 129, 0.4)";
  });

  searchInput.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
    this.parentElement.style.boxShadow = "none";
  });
}

// Ultra Burst Effect
function createUltraBurstEffect(element) {
  const rect = element.getBoundingClientRect();
  const colors = [
    "#10b981",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#ef4444",
  ];

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
        `;

    document.body.appendChild(particle);

    const angle = (i * 18 * Math.PI) / 180;
    const velocity = 150 + Math.random() * 100;
    const deltaX = Math.cos(angle) * velocity;
    const deltaY = Math.sin(angle) * velocity;

    particle.animate(
      [
        {
          transform: "translate(0, 0) scale(1) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translate(${deltaX}px, ${deltaY}px) scale(0) rotate(720deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    ).onfinish = () => particle.remove();
  }
}

// Enhanced Packing Animation
function createEnhancedPackingAnimation(button, productEmoji) {
  return new Promise((resolve) => {
    const productCard = button.closest(
      ".product-card-ultra, .product-card-enhanced, .product-card"
    );
    const rect = productCard.getBoundingClientRect();

    // Create enhanced packing box
    const packingBox = document.createElement("div");
    packingBox.innerHTML = `
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80px;
                height: 80px;
                background: linear-gradient(145deg, #8B4513, #A0522D);
                border: 3px solid #654321;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                animation: enhancedPacking 2s ease-in-out;
            ">
                ${productEmoji}
                <div style="
                    position: absolute;
                    top: -3px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 50px;
                    height: 6px;
                    background: #654321;
                    border-radius: 3px;
                "></div>
                <div style="
                    position: absolute;
                    top: 50%;
                    left: -3px;
                    transform: translateY(-50%);
                    width: 6px;
                    height: 50px;
                    background: #654321;
                    border-radius: 3px;
                "></div>
            </div>
        `;

    packingBox.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            z-index: 1000;
            pointer-events: none;
        `;

    document.body.appendChild(packingBox);

    // Enhanced particles
    createEnhancedParticleEffect(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2
    );

    setTimeout(() => {
      if (packingBox.parentNode) {
        packingBox.parentNode.removeChild(packingBox);
      }
      resolve();
    }, 2000);
  });
}

// Enhanced Particle Effect
function createEnhancedParticleEffect(x, y) {
  const colors = [
    "#10b981",
    "#34d399",
    "#6ee7b7",
    "#a7f3d0",
    "#fbbf24",
    "#f59e0b",
  ];

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 6 + 3}px;
            height: ${Math.random() * 6 + 3}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 999;
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        `;

    document.body.appendChild(particle);

    const angle = (i * 24 * Math.PI) / 180;
    const velocity = 80 + Math.random() * 60;
    const deltaX = Math.cos(angle) * velocity;
    const deltaY = Math.sin(angle) * velocity;

    particle.animate(
      [
        {
          transform: "translate(0, 0) scale(1)",
          opacity: 1,
        },
        {
          transform: `translate(${deltaX}px, ${deltaY}px) scale(0)`,
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        easing: "ease-out",
      }
    ).onfinish = () => particle.remove();
  }
}

// Enhanced Pack and Fly Animation Functions
function createPackingAnimation(button, productEmoji) {
  return new Promise((resolve) => {
    const productCard = button.closest(
      ".product-card, .product-card-enhanced, .product-card-ultra"
    );
    const rect = productCard.getBoundingClientRect();

    // Create packing box
    const packingBox = document.createElement("div");
    packingBox.className = "packing-box";
    packingBox.innerHTML = productEmoji;

    // Position relative to the product card
    packingBox.style.position = "absolute";
    packingBox.style.top = "50%";
    packingBox.style.left = "50%";
    packingBox.style.zIndex = "100";

    productCard.appendChild(packingBox);

    // Create particles effect
    createParticleEffect(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2
    );

    // Remove packing box after animation
    setTimeout(() => {
      if (packingBox.parentNode) {
        packingBox.parentNode.removeChild(packingBox);
      }
      resolve();
    }, 1500);
  });
}

function createFlyToCartAnimation(productEmoji, startRect) {
  return new Promise((resolve) => {
    const cartBtn = document.querySelector(".cart-btn");
    const cartRect = cartBtn.getBoundingClientRect();

    // Create flying item
    const flyingItem = document.createElement("div");
    flyingItem.className = "flying-item";
    flyingItem.innerHTML = `
            <div style="
                width: 40px;
                height: 40px;
                background: linear-gradient(145deg, #8B4513, #A0522D);
                border: 2px solid #654321;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                position: relative;
            ">
                ${productEmoji}
                <div style="
                    position: absolute;
                    top: -1px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20px;
                    height: 2px;
                    background: #654321;
                    border-radius: 1px;
                "></div>
            </div>
        `;

    // Set initial position
    flyingItem.style.left = startRect.left + startRect.width / 2 - 20 + "px";
    flyingItem.style.top = startRect.top + startRect.height / 2 - 20 + "px";

    document.body.appendChild(flyingItem);

    // Calculate trajectory
    const deltaX =
      cartRect.left +
      cartRect.width / 2 -
      (startRect.left + startRect.width / 2);
    const deltaY =
      cartRect.top +
      cartRect.height / 2 -
      (startRect.top + startRect.height / 2);

    // Animate to cart
    flyingItem.style.transition =
      "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    flyingItem.style.animation =
      "flyToCart 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

    requestAnimationFrame(() => {
      flyingItem.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`;
      flyingItem.style.opacity = "0";
    });

    // Animate cart shake
    setTimeout(() => {
      cartBtn.style.animation = "cartShake 0.4s ease-in-out";
      setTimeout(() => {
        cartBtn.style.animation = "";
      }, 400);
    }, 600);

    // Remove flying item
    setTimeout(() => {
      if (flyingItem.parentNode) {
        flyingItem.parentNode.removeChild(flyingItem);
      }
      resolve();
    }, 800);
  });
}

function createParticleEffect(x, y) {
  const colors = ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0"];

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    const angle = (i * 45 * Math.PI) / 180;
    const velocity = 50 + Math.random() * 30;
    const deltaX = Math.cos(angle) * velocity;
    const deltaY = Math.sin(angle) * velocity;

    particle.style.animation = `particleFloat 1s ease-out forwards`;
    particle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    document.body.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 1000);
  }
}

function showSuccessCheckmark(button) {
  const checkmark = document.createElement("div");
  checkmark.className = "success-checkmark";
  checkmark.innerHTML = '<i class="fas fa-check"></i>';

  button.style.position = "relative";
  button.appendChild(checkmark);

  setTimeout(() => {
    if (checkmark.parentNode) {
      checkmark.parentNode.removeChild(checkmark);
    }
    
  }, 600);
}

// Ultra Success Message
function showUltraSuccessMessage(productCard) {
  const successMsg = document.createElement("div");
  successMsg.innerHTML = `
        <div style="
            position: absolute;
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 25px;
            font-size: 0.875rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
            animation: successSlideDown 0.6s ease-out;
            z-index: 100;
        ">
            <i class="fas fa-check-circle"></i>
            <span>Added to cart!</span>
        </div>
    `;

  productCard.appendChild(successMsg);

  setTimeout(() => {
    if (successMsg.parentNode) {
      successMsg.parentNode.removeChild(successMsg);
    }
  }, 2000);
}

// Burst Effect
function createBurstEffect(element) {
  const rect = element.getBoundingClientRect();
  const colors = ["#10b981", "#3b82f6", "#8b5cf6", "#ef4444", "#f59e0b"];

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
        `;

    document.body.appendChild(particle);

    const angle = (i * 30 * Math.PI) / 180;
    const velocity = 100 + Math.random() * 50;
    const deltaX = Math.cos(angle) * velocity;
    const deltaY = Math.sin(angle) * velocity;

    particle.animate(
      [
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        {
          transform: `translate(${deltaX}px, ${deltaY}px) scale(0)`,
          opacity: 0,
        },
      ],
      {
        duration: 800,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    ).onfinish = () => particle.remove();
  }
}

// Ultra Add to Cart Functionality
function initUltraAddToCart() {
  document.querySelectorAll(".add-to-cart-ultra").forEach((button) => {
    button.addEventListener("click", async function (e) {
      e.preventDefault();

      if (this.classList.contains("processing")) return;
      this.classList.add("processing");

      const productCard = this.closest(".product-card-ultra");
      const productEmoji = productCard.getAttribute("data-product");

      // Create ultra burst effect
      createUltraBurstEffect(this);

      // Add success class
      this.classList.add("success");

      try {
        const rect = productCard.getBoundingClientRect();
        await createEnhancedPackingAnimation(this, productEmoji);
        await createFlyToCartAnimation(productEmoji, rect);

        // Update cart
        animateCartAdd();
        updateCartCount();

        // Show success message
        showUltraSuccessMessage(productCard);
      } catch (error) {
        console.error("Ultra animation error:", error);
      }

      setTimeout(() => {
        this.classList.remove("success", "processing");
      }, 3000);
    });
  });
}

// Enhanced Add to Cart functionality for both regular and enhanced cards
function initEnhancedAddToCart() {
  document.querySelectorAll(".add-to-cart-enhanced").forEach((button) => {
    button.addEventListener("click", async function (e) {
      e.preventDefault();

      if (this.classList.contains("processing")) return;
      this.classList.add("processing");

      const productCard = this.closest(".product-card-enhanced");
      const productEmoji = productCard.getAttribute("data-product");

      // Button animation
      const originalContent = this.innerHTML;
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';

      // Create burst effect
      createBurstEffect(this);

      try {
        const rect = productCard.getBoundingClientRect();
        await createPackingAnimation(this, productEmoji);
        await createFlyToCartAnimation(productEmoji, rect);

        // Success state
        this.innerHTML = '<i class="fas fa-check"></i> Added!';
        this.style.background = "linear-gradient(to right, #059669, #047857)";

        // Update cart
        animateCartAdd();
        updateCartCount();
      } catch (error) {
        this.innerHTML = '<i class="fas fa-exclamation"></i> Error';
        this.style.background = "linear-gradient(to right, #ef4444, #dc2626)";
      }

      setTimeout(() => {
        this.innerHTML = originalContent;
        this.style.background = "";
        this.classList.remove("processing");
      }, 2000);
    });
  });
}

// Original Add to Cart Event Listeners
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", async function (e) {
    e.preventDefault();

    // Prevent multiple clicks
    if (this.classList.contains("processing")) return;
    this.classList.add("processing");

    // Get product info
    const productCard = this.closest(".product-card");
    const productImage = productCard.querySelector(".product-image div");
    const productEmoji = productImage.textContent.trim();

    // Button loading state
    const originalContent = this.innerHTML;
    this.classList.add("btn-loading");
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    this.style.pointerEvents = "none";

    try {
      // Get button position before animation
      const buttonRect = this.getBoundingClientRect();

      // Step 1: Packing animation
      await createPackingAnimation(this, productEmoji);

      // Step 2: Fly to cart animation
      await createFlyToCartAnimation(productEmoji, buttonRect);

      // Step 3: Update cart and show success
      animateCartAdd();
      showSuccessCheckmark(this);

      // Update cart count
      const cartBadge = document.querySelector(".cart-badge");
      const currentCount = parseInt(cartBadge.textContent);
      cartBadge.textContent = currentCount + 1;

      // Success state
      this.innerHTML = '<i class="fas fa-check"></i> Added';
      this.style.background = "#059669";
      this.classList.remove("btn-loading");
    } catch (error) {
      console.error("Animation error:", error);
      this.innerHTML = '<i class="fas fa-exclamation"></i> Error';
      this.style.background = "#ef4444";
    }

    // Reset button after delay
    setTimeout(() => {
      this.innerHTML = originalContent;
      this.style.background = "#10b981";
      this.style.pointerEvents = "auto";
      this.classList.remove("processing");
    }, 2000);
  });
});

// Enhanced cart animation
function animateCartAdd() {
  const cartBtn = document.querySelector(".cart-btn");
  const cartBadge = document.querySelector(".cart-badge");

  // Cart icon animation
  cartBtn.style.transform = "scale(1.2)";
  cartBtn.style.color = "#10b981";

  // Badge animation
  cartBadge.style.transform = "scale(1.5)";
  cartBadge.style.background = "#059669";
  cartBadge.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.6)";

  setTimeout(() => {
    cartBtn.style.transform = "scale(1)";
    cartBtn.style.color = "#374151";
    cartBadge.style.transform = "scale(1)";
    cartBadge.style.background = "#10b981";
    cartBadge.style.boxShadow = "none";
  }, 400);
}

function updateCartCount() {
  const cartBadge = document.querySelector(".cart-badge");
  const currentCount = parseInt(cartBadge.textContent);
  cartBadge.textContent = currentCount + 1;
}

// Quantity Selector Functionality
function initQuantitySelectors() {
  document.querySelectorAll(".quantity-selector").forEach((selector) => {
    const minusBtn = selector.querySelector(".qty-minus");
    const plusBtn = selector.querySelector(".qty-plus");
    const display = selector.querySelector(".qty-display");

    let quantity = 1;

    minusBtn?.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        display.textContent = quantity;
        display.style.animation = "quantityBounce 0.3s ease-out";
      }
    });

    plusBtn?.addEventListener("click", () => {
      if (quantity < 10) {
        quantity++;
        display.textContent = quantity;
        display.style.animation = "quantityBounce 0.3s ease-out";
      }
    });
  });
}

// Wishlist Functionality
function initWishlistButtons() {
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      this.classList.toggle("active");

      if (this.classList.contains("active")) {
        this.innerHTML = '<i class="fas fa-heart"></i>';
        createHeartEffect(this);
      } else {
        this.innerHTML = '<i class="far fa-heart"></i>';
      }
    });
  });
}

// Heart Effect
function createHeartEffect(element) {
  const rect = element.getBoundingClientRect();

  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heart.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            color: #ef4444;
            font-size: 1rem;
            pointer-events: none;
            z-index: 1000;
            animation: heartFloat 1.5s ease-out forwards;
            animation-delay: ${i * 0.1}s;
        `;

    document.body.appendChild(heart);

    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 1500 + i * 100);
  }
}

// Quick View Functionality
function initQuickViewButtons() {
  document.querySelectorAll(".quick-view-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const productCard = this.closest(".product-card-ultra");
      const productTitle =
        productCard.querySelector(".product-title").textContent;

      // Create quick view modal (simplified)
      createQuickViewModal(productCard);
    });
  });
}

// Quick View Modal
function createQuickViewModal(productCard) {
  const modal = document.createElement("div");
  modal.innerHTML = `
        <div style="
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: modalFadeIn 0.3s ease-out;
        " class="quick-view-modal">
            <div style="
                background: white;
                border-radius: 24px;
                padding: 2rem;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                animation: modalSlideUp 0.4s ease-out;
                position: relative;
            ">
                <button style="
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #6b7280;
                " class="modal-close">&times;</button>
                
                <div style="text-align: center;">
                    <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">
                        Quick View
                    </h3>
                    <p style="color: #6b7280;">
                        Quick view functionality would be implemented here with product details, larger images, and more information.
                    </p>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  // Close modal functionality
  modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.style.animation = "modalFadeOut 0.3s ease-out";
    setTimeout(() => {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }, 300);
  });

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.querySelector(".modal-close").click();
    }
  });
}

// Review Interactions
function initReviewInteractions() {
  document.querySelectorAll(".interaction-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.querySelector("i").classList.contains("fa-thumbs-up")) {
        const countSpan = this.querySelector("span");
        let count = parseInt(countSpan.textContent);
        count++;
        countSpan.textContent = count;

        this.style.background = "rgba(16, 185, 129, 0.2)";
        this.style.color = "#10b981";
        this.style.transform = "scale(1.05)";

        setTimeout(() => {
          this.style.transform = "scale(1)";
        }, 200);
      } else {
        // Share functionality
        if (navigator.share) {
          navigator.share({
            title: "Blinkit Customer Review",
            text: "Check out this amazing review!",
            url: window.location.href,
          });
        } else {
          // Fallback
          navigator.clipboard.writeText(window.location.href);
          this.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
          setTimeout(() => {
            this.innerHTML = '<i class="fas fa-share"></i><span>Share</span>';
          }, 2000);
        }
      }
    });
  });
}

// Category Card Interactions
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.05)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Smooth Scroll for CTA Buttons
document.querySelectorAll(".cta-primary, .cta-secondary").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Button click animation
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);

    // Scroll to products section
    const productsSection = document.querySelector(
      ".products-section, .products-section-ultra"
    );
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Feature Card Hover Effects
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const icon = this.querySelector(".feature-icon");
    if (icon) {
      icon.style.transform = "scale(1.1) rotate(5deg)";
    }
  });

  card.addEventListener("mouseleave", function () {
    const icon = this.querySelector(".feature-icon");
    if (icon) {
      icon.style.transform = "scale(1) rotate(0deg)";
    }
  });
});

// Parallax Effect for Hero Section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  const heroAnimation = document.querySelector(".hero-animation");

  if (heroContent && heroAnimation) {
    heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
    heroAnimation.style.transform = `translateY(${scrolled * -0.1}px)`;
  }
});

// Location Button Functionality
const locationBtn = document.querySelector(".location-btn");
if (locationBtn) {
  locationBtn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
      alert("Location services would be implemented here!");
    }, 150);
  });
}

// Login Button Functionality
const loginBtn = document.querySelector(".login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
      alert("Login modal would open here!");
    }, 150);
  });
}

// Intersection Observer for Enhanced Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Product Card Hover Effects (Enhanced and Regular)
document
  .querySelectorAll(
    ".product-card, .product-card-enhanced, .product-card-ultra"
  )
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      if (this.classList.contains("product-card-ultra")) {
        this.style.transform =
          "translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.02)";
      } else if (this.classList.contains("product-card-enhanced")) {
        this.style.transform = "translateY(-10px) rotateX(5deg) scale(1.02)";
      } else {
        this.style.transform = "translateY(-10px) scale(1.02)";
      }
      this.style.boxShadow = "0 20px 40px rgba(16, 185, 129, 0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  });

// Typing Animation for Hero Text
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing animation
window.addEventListener("load", function () {
  setTimeout(() => {
    const typingElement = document.querySelector(".typing-animation");
    if (typingElement) {
      typeWriter(typingElement, "10 minutes", 150);
    }
  }, 1000);
});

// Add ripple effect to buttons
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add CSS for additional animations
const additionalStyles = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes enhancedPacking {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0) rotate(0deg); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1.3) rotate(90deg); }
        40% { transform: translate(-50%, -50%) scale(0.9) rotate(180deg); }
        60% { transform: translate(-50%, -50%) scale(1.1) rotate(270deg); }
        80% { transform: translate(-50%, -50%) scale(1) rotate(360deg); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8) rotate(450deg); }
    }
    
    @keyframes successSlideDown {
        0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        100% { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    
    @keyframes quantityBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    @keyframes heartFloat {
        0% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-50px) scale(0.5); }
    }
    
    @keyframes modalFadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    
    @keyframes modalFadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes modalSlideUp {
        0% { opacity: 0; transform: translateY(50px) scale(0.9); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
    }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize all enhanced features
document.addEventListener("DOMContentLoaded", function () {
  // Initialize enhanced features
  initCustomCursor();
  initCounters();

  // Try to initialize ultra swiper first, then enhanced, then fallback
  setTimeout(() => {
    try {
      initUltraProductsSwiper();
    } catch (error) {
      console.warn("Ultra swiper failed, trying enhanced:", error);
      try {
        initEnhancedProductsSwiper();
      } catch (error2) {
        console.warn("Enhanced swiper failed, using original:", error2);
        initOriginalProductsSwiper();
      }
    }

    try {
      initUltraReviewsSwiper();
    } catch (error) {
      console.warn("Ultra reviews swiper failed, using original:", error);
      initReviewsSwiper();
    }

    // Initialize all add to cart functionalities
    initUltraAddToCart();
    initEnhancedAddToCart();

    // Initialize other ultra features
    initQuantitySelectors();
    initWishlistButtons();
    initQuickViewButtons();
    initReviewInteractions();

    console.log(
      "🚀 Ultra-Enhanced Blinkit Clone loaded with all amazing features!"
    );
  }, 100);
});
// NUCLEAR RESPONSIVE FIX - REPLACE ALL PREVIOUS FIXES

// Aggressive Swiper Reset Function
function nuclearReset() {
    console.log('🔥 NUCLEAR RESET - Destroying everything');
    
    // 1. Remove all inline styles from cards
    document.querySelectorAll('.product-card, .product-card-enhanced, .product-card-ultra').forEach(card => {
        card.removeAttribute('style');
        card.className = card.className.replace(/\bhover\b|\bprocessing\b|\bsuccess\b/g, '').trim();
    });
    
    // 2. Remove all inline styles from swiper elements
    document.querySelectorAll('.swiper, .swiper-wrapper, .swiper-slide').forEach(el => {
        el.removeAttribute('style');
    });
    
    // 3. Completely destroy all swiper instances
    document.querySelectorAll('.swiper').forEach(swiperEl => {
        if (swiperEl.swiper) {
            try {
                swiperEl.swiper.destroy(true, true);
                delete swiperEl.swiper;
            } catch (e) {
                console.warn('Destroy error:', e);
            }
        }
    });
    
    // 4. Force DOM reflow
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';
    
    // 5. Wait and reinitialize with simple settings
    setTimeout(() => {
        initSimpleSwiper();
    }, 500);
}

// Simple Swiper Initialization (no fancy effects)
function initSimpleSwiper() {
    console.log('🔄 Initializing simple swiper');
    
    try {
        // Initialize products swiper with basic settings
        const productsContainer = document.querySelector('.products-swiper, .products-swiper-ultra, .swiper');
        if (productsContainer) {
            new Swiper(productsContainer, {
                slidesPerView: 'auto',
                spaceBetween: 20,
                loop: false,
                centeredSlides: false,
                freeMode: true,
                navigation: {
                    nextEl: '.swiper-button-next, .swiper-button-next-custom, .swiper-button-next-ultra',
                    prevEl: '.swiper-button-prev, .swiper-button-prev-custom, .swiper-button-prev-ultra',
                },
                pagination: {
                    el: '.swiper-pagination, .swiper-pagination-custom, .swiper-pagination-ultra',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                },
                on: {
                    init: function() {
                        console.log('✅ Simple swiper initialized');
                    },
                    resize: function() {
                        this.update();
                    }
                }
            });
        }
        
        // Initialize reviews swiper
        const reviewsContainer = document.querySelector('.reviews-swiper, .reviews-swiper-ultra');
        if (reviewsContainer) {
            new Swiper(reviewsContainer, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: '.swiper-button-next-review',
                    prevEl: '.swiper-button-prev-review',
                },
                pagination: {
                    el: '.swiper-pagination-review',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });
        }
        
    } catch (error) {
        console.error('Simple swiper init error:', error);
    }
}

// Event listeners for nuclear reset
let resetTimeout;

window.addEventListener('resize', () => {
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(nuclearReset, 250);
});

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        setTimeout(nuclearReset, 300);
    }
});

window.addEventListener('focus', () => {
    setTimeout(nuclearReset, 200);
});

// Enhanced hover management (simpler version)
function initBasicHover() {
    document.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.product-card, .product-card-enhanced, .product-card-ultra');
        if (card) {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.product-card, .product-card-enhanced, .product-card-ultra');
        if (card && !card.matches(':hover')) {
            setTimeout(() => {
                if (!card.matches(':hover')) {
                    card.style.transform = 'none';
                }
            }, 50);
        }
    });
}

// Manual reset functions
function emergencyReset() {
    nuclearReset();
    console.log('🚨 Emergency reset completed');
}

function fixLayout() {
    document.querySelectorAll('.product-card, .product-card-enhanced, .product-card-ultra').forEach(card => {
        card.removeAttribute('style');
    });
    document.querySelectorAll('.swiper, .swiper-wrapper, .swiper-slide').forEach(el => {
        el.removeAttribute('style');
    });
    console.log('🔧 Layout fixed');
}

// Make functions globally available
window.emergencyReset = emergencyReset;
window.fixLayout = fixLayout;
window.nuclearReset = nuclearReset;

// Initialize on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        nuclearReset();
        initBasicHover();
    }, 1000);
});

console.log('🔥 Nuclear responsive fix loaded - use emergencyReset() if needed');


console.log("🛒 Blinkit Clone loaded successfully! 🚀");
