document.addEventListener("DOMContentLoaded", function () {
  const requiredFiles = ["parmida.ui.min.css"];

  function checkAllResourcesLoaded() {
    const resources = performance.getEntriesByType("resource");
    const loadedFiles = resources
      .map((res) => res.name.split("/").pop())
      .filter((name) => requiredFiles.includes(name));
    // console.log(resources);

    return requiredFiles.every((file) => loadedFiles.includes(file));
  }

  if (document.getElementById("search-box")) {
    function fetchEngine() {
      try {
        const xhrobj = new XMLHttpRequest();
        xhrobj.open("GET", "searchengine.bc");
        xhrobj.send();

        xhrobj.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            const container = document.getElementById("search-box");
            container.innerHTML = xhrobj.responseText;

            document.querySelector(
              "#r-tour .searchList input.reserve-location"
            ).readOnly = true;
            document.querySelectorAll(".flighttype-field").forEach((e) => {
              e.classList.add("flighttype-dropDown");
            });

            const span1 = document.querySelectorAll(
              "#search-box .passenger-counts.adult-count"
            );
            span1.forEach((span) => {
              span.parentElement.classList.add("parent-for-counters");
            });

            const scripts = container.getElementsByTagName("script");
            for (let i = 0; i < scripts.length; i++) {
              const scriptTag = document.createElement("script");
              if (scripts[i].src) {
                scriptTag.src = scripts[i].src;
                scriptTag.async = false;
              } else {
                scriptTag.text = scripts[i].textContent;
              }
              document.head
                .appendChild(scriptTag)
                .parentNode.removeChild(scriptTag);
            }
          }
        };
      } catch (error) {
        console.error("مشکلی پیش آمده است. لطفا صبور باشید", error);
      }
    }

    function waitForFiles() {
      if (checkAllResourcesLoaded()) {
        fetchEngine();
      } else {
        setTimeout(waitForFiles, 500);
      }
    }
    waitForFiles();
  }
});
// ____________________________________
// ____________________________________
// ____________________________________
const commonQS = document.querySelector(".common-qs");
if (commonQS) {
  const qusetions = commonQS.querySelectorAll(".box");
  qusetions.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
  const qstion = commonQS.querySelectorAll(".box");
  qstion.forEach((item) => {
    document.addEventListener("click", (e) => {
      if (!item.contains(e.target)) {
        item.classList.remove("active");
      }
    });
  });
}
// _____________________________________________________________
if (document.querySelectorAll(".swiper-5").length > 0)
  swiper = new Swiper(".swiper-5", {
    slidesPerView: 5,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 12,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 5, spaceBetween: 12 },
      768: { slidesPerView: 5, spaceBetween: 12 },
      1024: { slidesPerView: 5, spaceBetween: 12 },
    },
  });
if (document.querySelectorAll(".swiper-4").length > 0)
  swiper = new Swiper(".swiper-4", {
    slidesPerView: 4,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 9.2,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 10 },
      768: { slidesPerView: 4, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 9.2 },
    },
  });
if (document.querySelectorAll(".swiper-3").length > 0)
  swiper = new Swiper(".swiper-3", {
    slidesPerView: 3,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 12,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 3, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 12 },
      1024: { slidesPerView: 3, spaceBetween: 12 },
    },
  });
if (document.querySelectorAll(".swiper-mobile").length > 0)
  swiper = new Swiper(".swiper-mobile", {
    slidesPerView: 1.55,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1.55, spaceBetween: 10 },
      768: { slidesPerView: 1.55, spaceBetween: 10 },
      1024: { slidesPerView: 1.48, spaceBetween: 10 },
    },
  });
if (document.querySelectorAll(".swiper-mobile2").length > 0)
  swiper = new Swiper(".swiper-mobile2", {
    slidesPerView: 1.424,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1.55, spaceBetween: 10 },
      768: { slidesPerView: 1.35, spaceBetween: 10 },
      1024: { slidesPerView: 1.424, spaceBetween: 10 },
    },
  });

if (document.querySelectorAll(".swiper-mobile3").length > 0)
  swiper = new Swiper(".swiper-mobile3", {
    slidesPerView: 1,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 1, spaceBetween: 10 },
      1024: { slidesPerView: 1, spaceBetween: 10 },
    },
  });
const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1024) {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
  });
} else {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(1024px)";
    document.querySelector("body").style.overflow = "";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
    document.querySelector("body").style.overflow = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  toggleDropdowns.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    const dropdownIcon = dropdownIcons[index];

    toggle.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight * 30 + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});

// _______________________
document.addEventListener("DOMContentLoaded", function () {
  const SpeacialTel = document.querySelector(".special-tel");
  const footer = document.querySelector("footer");

  function checkScroll() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop <= windowHeight) {
      SpeacialTel.style.opacity = "0";
      SpeacialTel.style.zIndex = "0";
    } else {
      SpeacialTel.style.zIndex = "20";
      SpeacialTel.style.opacity = "1";
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();

  setInterval(() => {
    // SpeacialTel.style.right = "-200px";

    setTimeout(() => {
      // SpeacialTel.style.right = "0px";
    }, 9000);
  }, 9000);
});
document.addEventListener("DOMContentLoaded", function () {
  const filterSelector = document.querySelector(".filter-selector");
  if (filterSelector) {
    const button = filterSelector.querySelector("button");
    const dropdown = filterSelector.querySelector("ul");
    const items = dropdown.querySelectorAll("li");
    const filterText = filterSelector.querySelector(".filter-text");

    button.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("flex");
    });

    items.forEach((li) => {
      li.addEventListener("click", function () {
        filterText.textContent = this.textContent;
        dropdown.classList.add("hidden");
        dropdown.classList.remove("flex");
      });
    });

    document.addEventListener("click", function (e) {
      if (!filterSelector.contains(e.target)) {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("flex");
      }
    });
  }
});
// _________________________________
// document.addEventListener("DOMContentLoaded", function () {
//   const headerB = document.querySelector("header div.bg-white.h-16");

//   if (!headerB) return;

//   window.addEventListener("scroll", function () {
//     if (window.location.pathname === "/") {
//       if (window.scrollY > 60) {
//         headerB.style.position = "fixed";
//         headerB.style.top = "0";
//         headerB.style.left = "0";
//         headerB.style.width = "100%";
//         headerB.style.zIndex = "20";
//         headerB.style.boxShadow = "0px 4px 20px 0px #27272714";
//       } else {
//         headerB.style.position = "";
//         headerB.style.top = "";
//         headerB.style.left = "";
//         headerB.style.width = "";
//         headerB.style.zIndex = "";
//         headerB.style.boxShadow = "";
//       }
//     }
//   });
// });
// _______________________________
// _______________________________
// _______________________________
// _______________________________
function watchForFlightTypeField(callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches(".flighttype-field")) {
            callback(node);
          }

          const matches = node.querySelectorAll(".flighttype-field");
          matches.forEach((match) => callback(match));
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  document.querySelectorAll(".flighttype-field").forEach(callback);
}
watchForFlightTypeField((el) => {
  const liObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const target = mutation.target;
        if (target.classList.contains("active-module")) {
          const navValue = target.getAttribute("data-nav");
          if (navValue) {
            document.querySelectorAll(".reservation-item li").forEach((li) => {
              const val = li.getAttribute("data-nav");
              if (val) {
                document.body.classList.remove(val);
              }
            });
            document.body.classList.add(navValue);
          }
        }
      }
    }
  });

  const reservationItems = document.querySelectorAll(".reservation-item li");
  reservationItems.forEach((li) => {
    liObserver.observe(li, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });
});
// ---------------------------------
if (document.querySelector("#search-box")) {
  (function monitorFlightSearch() {
    let flightSearch = null;
    let lastHadMulticityClass = null;
    let lastHadOneBtbClass = null;

    const observer = new MutationObserver(() => {
      if (!flightSearch) {
        flightSearch = document.querySelector("#flightSearch");
        if (flightSearch) {
          // console.log("#flightSearch پیدا شد");
          watchClassChanges();
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    function watchClassChanges() {
      const classObserver = new MutationObserver(() => {
        const hasMulticity = flightSearch.classList.contains(
          "multicity-flight-form"
        );
        const hasOneBtb = flightSearch.classList.contains(
          "one-btb-flight-form"
        );

        // مانیتور کلاس multicity-flight-form
        if (hasMulticity && lastHadMulticityClass !== true) {
          document.querySelector("#search-box").classList.add("set-64mt");
          document.querySelectorAll(".reservation-item li").forEach((li) => {
            li.addEventListener("click", () => {
              if (!li.classList.contains("flight-btn")) {
                document
                  .querySelector("#search-box")
                  .classList.remove("set-64mt");
              } else {
                if (flightSearch.classList.contains("multicity-flight-form")) {
                  document
                    .querySelector("#search-box")
                    .classList.add("set-64mt");
                }
              }
            });
          });
          lastHadMulticityClass = true;
        }

        if (!hasMulticity && lastHadMulticityClass !== false) {
          document.querySelector("#search-box").classList.remove("set-64mt");
          lastHadMulticityClass = false;
        }

        // مانیتور کلاس one-btb-flight-form
        if (hasOneBtb && lastHadOneBtbClass !== true) {
          document.querySelector("#search-box").classList.remove("set-64mt");

          lastHadOneBtbClass = true;
        }

        if (!hasOneBtb && lastHadOneBtbClass !== false) {
          lastHadOneBtbClass = false;
        }
      });

      classObserver.observe(flightSearch, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
  })();
}
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________

// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________

document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".fetch-content-destination"),
    t = document.querySelectorAll(".destination-li");
  if (t.length >= 1) {
    t[0].style.backgroundColor = "#03004E";
    t[0].style.color = "#fff";
  }
  if (e) {
    async function n(t = 215372) {
      e.innerHTML =
        '<div class="w-full flex p-6 justify-center items-center"><span class="loader"></span></div>';
      try {
        let n = await fetch(`/destination-load-items.bc?catid=${t}`);
        if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
        let o = await n.text();
        (e.innerHTML = o),
          window.destinationSwiper && window.destinationSwiper.destroy(!0, !0),
          (window.destinationSwiper = new Swiper(
            "#destination-list-container",
            {
              slidesPerView: 5,
              speed: 500,
              centeredSlides: !1,
              spaceBetween: 12,
              grabCursor: !0,
              autoplay: { delay: 9500, disableOnInteraction: !1 },
              pagination: { el: ".swiper-pagination", clickable: !0 },
              navigation: {
                nextEl: ".swiper-button-next-f",
                prevEl: ".swiper-button-prev-f",
              },
              breakpoints: {
                640: { slidesPerView: 1.3, spaceBetween: 20 },
                768: { slidesPerView: 5, spaceBetween: 12 },
                1024: { slidesPerView: 5, spaceBetween: 12 },
              },
            }
          ));
      } catch (t) {
        console.error("Fetch failed:", t),
          (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
      }
    }
    n(),
      t.forEach((e) => {
        e.addEventListener("click", function () {
          t.forEach((e) => {
            (e.style.backgroundColor = ""), (e.style.color = "");
          }),
            (e.style.backgroundColor = "#03004E"),
            (e.style.color = "#fff"),
            n(e.getAttribute("data-id"));
        });
      });
  }
});
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".fetch-content-destinationmob"),
    t = document.querySelectorAll(".destinationmob-li");
  if (t.length >= 1) {
    t[0].style.backgroundColor = "#03004E";
    t[0].style.color = "#fff";
  }
  if (e) {
    async function n(t = 215372) {
      e.innerHTML =
        '<div class="w-full flex justify-center p-6"><span class="loader"></span></div>';
      try {
        let n = await fetch(`/destination-load-items.bc?catid=${t}`);
        if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
        let o = await n.text();
        (e.innerHTML = o),
          window.destinationmobSwiper &&
            window.destinationmobSwiper.destroy(!0, !0),
          (window.destinationmobSwiper = new Swiper(
            "#destinationmob-list-container",
            {
              slidesPerView: 1,
              speed: 500,
              centeredSlides: !1,
              spaceBetween: 10,
              grabCursor: !0,
              autoplay: { delay: 9500, disableOnInteraction: !1 },
              pagination: { el: ".swiper-pagination", clickable: !0 },
              navigation: {
                nextEl: ".swiper-button-next-f",
                prevEl: ".swiper-button-prev-f",
              },
              breakpoints: {
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 1, spaceBetween: 40 },
                1024: { slidesPerView: 1, spaceBetween: 15 },
              },
            }
          ));
      } catch (t) {
        console.error("Fetch failed:", t),
          (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
      }
    }
    n(),
      t.forEach((e) => {
        e.addEventListener("click", function () {
          t.forEach((e) => {
            (e.style.backgroundColor = ""), (e.style.color = "");
          }),
            (e.style.backgroundColor = "#03004E"),
            (e.style.color = "#fff"),
            n(e.getAttribute("data-id"));
        });
      });
  }
});
// _________________________
// _________________________
// _________________________
// _________________________
document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".fetch-content-tour"),
    t = document.querySelectorAll(".tour-li");
  if (t.length >= 1) {
    t[0].style.backgroundColor = "#03004E";
    t[0].style.color = "#fff";
  }
  if (e) {
    async function n(t = 215372) {
      e.innerHTML =
        '<div class="w-full flex justify-center p-6"><span class="loader"></span></div>';
      try {
        let n = await fetch(`/tour-load-items.bc?catid=${t}`);
        if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
        let o = await n.text();
        (e.innerHTML = o),
          window.tourSwiper && window.tourSwiper.destroy(!0, !0),
          (window.tourSwiper = new Swiper("#tour-list-container", {
            slidesPerView: 4,
            speed: 500,
            centeredSlides: !1,
            spaceBetween: 9.2,
            grabCursor: !0,
            autoplay: { delay: 9500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
              nextEl: ".swiper-button-next-f",
              prevEl: ".swiper-button-prev-f",
            },
            breakpoints: {
              640: { slidesPerView: 1.3, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 9.2 },
              1024: { slidesPerView: 4, spaceBetween: 9.2 },
            },
          }));

        const elements = document.querySelectorAll("span.min-w-\\[77px\\]");

        elements.forEach((el) => {
          if (!el) return;

          const updateOpacity = () => {
            const hasContent =
              el.textContent.trim().length > 0 || el.children.length > 0;

            el.style.opacity = hasContent ? "1" : "0";
          };

          updateOpacity();
        });
      } catch (t) {
        console.error("Fetch failed:", t),
          (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
      }
    }
    n(),
      t.forEach((e) => {
        e.addEventListener("click", function () {
          t.forEach((e) => {
            (e.style.backgroundColor = ""), (e.style.color = "");
          }),
            (e.style.backgroundColor = "#03004E"),
            (e.style.color = "#fff"),
            n(e.getAttribute("data-id"));
        });
      });
  }
});
// _________________________
// _________________________
// _________________________
// _________________________

document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".fetch-content-tourmob"),
    t = document.querySelectorAll(".tourmob-li");
  if (t.length >= 1) {
    t[0].style.backgroundColor = "#03004E";
    t[0].style.color = "#fff";
  }
  if (e) {
    async function n(t = 215372) {
      e.innerHTML =
        '<div class="w-full flex justify-center p-6"><span class="loader"></span></div>';
      try {
        let n = await fetch(`tour-load-items.bc?catid=${t}`);
        if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
        let o = await n.text();
        (e.innerHTML = o),
          window.tourmobSwiper && window.tourmobSwiper.destroy(!0, !0),
          (window.tourmobSwiper = new Swiper("#tourmob-list-container", {
            slidesPerView: 1,
            speed: 500,
            centeredSlides: !1,
            spaceBetween: 10,
            grabCursor: !0,
            autoplay: { delay: 4500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
              nextEl: ".swiper-button-next-f",
              prevEl: ".swiper-button-prev-f",
            },
            breakpoints: {
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 1, spaceBetween: 10 },
              1024: { slidesPerView: 1, spaceBetween: 10 },
            },
          }));
        const elements = document.querySelectorAll("span.min-w-\\[77px\\]");

        elements.forEach((el) => {
          if (!el) return;

          const updateOpacity = () => {
            const hasContent =
              el.textContent.trim().length > 0 || el.children.length > 0;

            el.style.opacity = hasContent ? "1" : "0";
          };

          updateOpacity();
        });
      } catch (t) {
        console.error("Fetch failed:", t),
          (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
      }
    }
    n(),
      t.forEach((e) => {
        e.addEventListener("click", function () {
          t.forEach((e) => {
            (e.style.backgroundColor = ""), (e.style.color = "");
          }),
            (e.style.backgroundColor = "#03004E"),
            (e.style.color = "#fff"),
            n(e.getAttribute("data-id"));
        });
      });
  }
});
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
function uploadDocumentFooter(e) {
  document.querySelector("#contact-form-resize .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captcha']").value,
    n = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    o = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadFooter", {
    value: o,
    captcha: t,
    captchaid: n,
    run: !0,
  });
}
function refreshCaptchaFooter(e) {
  $bc.setSource("captcha.refreshFooter", !0);
}
function captchaRenderedFooter() {
  document.querySelector("#contact-form-resize .contactUsInput").placeholder =
    "کد امنیتی";
}
let lastSubmission = {
  data: null,
  timestamp: 0,
};
async function OnProcessedEditObjectFooter(e) {
  const nameInput = document
    .querySelector("#contact-form-resize .name-ans input")
    .value.trim();
  const phoneInput = document
    .querySelector("#contact-form-resize .phone-ans input")
    .value.trim();

  "6" == (await e.response.json()).errorid
    ? ((document.querySelector(
        "#contact-form-resize .Loading_Form"
      ).style.display = "none"),
      (document.querySelector("#contact-form-resize .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaFooter(),
      setTimeout(() => {
        (document.querySelector(
          "#contact-form-resize .Loading_Form"
        ).style.display = "none"),
          (document.querySelector(
            "#contact-form-resize .message-api"
          ).innerHTML = "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormFooter() {
  document
    .querySelector("#contact-form-resize .phone-ans input[data-bc-text-input]")
    .setAttribute("placeholder", "شماره تماس"),
    document
      .querySelector("#contact-form-resize .name-ans input[data-bc-text-input]")
      .setAttribute("placeholder", "نام نام خانوادگی");
}
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const cards = Array.from(document.querySelectorAll(".tour-list div.linear4")); // همه کارت‌ها
  const buttons = {
    all: document.querySelector(".all-btn"),
    soon: document.querySelector(".soon-btn"),
    popular: document.querySelector(".popular-btn"),
    discount: document.querySelector(".discount-btn"),
  };
  const itemCountEl = document.querySelector(".item_count");
  const noResultsMessage = document.getElementById("no-results-message");
  const pagingCn = document.querySelector("#paging-cn");

  function showCards(filterClass = null) {
    let visibleCount = 0;

    cards.forEach((card, index) => {
      if (!filterClass) {
        // حالت all
        card.style.display = "flex";
        visibleCount++;
        // console.log(`✅ کارت ${index + 1} نمایش داده شد (all mode)`);
        itemCountEl.innerText = `${index + 1}`;
      } else {
        // حالت فیلتر خاص
        const filterElement = card.querySelector(`.${filterClass}`);

        // آیا المنت فیلتر وجود دارد و چیزی برای نمایش دارد؟
        const hasContent =
          filterElement &&
          (filterElement.textContent.trim().length > 0 ||
            filterElement.children.length > 0);

        if (hasContent) {
          card.style.display = "flex";
          card.classList.add("counterrr");
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      }
    });

    // به‌روزرسانی شمارش
    if (itemCountEl) {
      itemCountEl.textContent = visibleCount;
    }

    // مدیریت پیام "نتیجه‌ای یافت نشد"
    if (visibleCount === 0) {
      noResultsMessage?.classList.remove("hidden");
      pagingCn?.classList.add("hidden");
    } else {
      noResultsMessage?.classList.add("hidden");
      pagingCn?.classList.remove("hidden");
    }
  }

  // شمارش اولیه در اولین بار که صفحه لود می‌شود
  showCards(); // حالت all

  // تنظیم دکمه‌ها
  buttons.all?.addEventListener("click", () => showCards());
  buttons.soon?.addEventListener("click", () => showCards("soon"));
  buttons.popular?.addEventListener("click", () => showCards("popular-tour"));
  buttons.discount?.addEventListener("click", () => showCards("discount"));
});

const fLists = document.querySelectorAll("ul.flex.btn-container li");
if (fLists[0]) {
  fLists[0].style.backgroundColor = "#03004E";
  fLists[0].style.color = "#fff";
}
fLists.forEach((li) => {
  li.addEventListener("click", () => {
    fLists.forEach((el) => {
      el.style.backgroundColor = "";
      el.style.color = "";
    });

    li.style.backgroundColor = "#03004E";
    li.style.color = "#fff";
  });
});
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
// _____________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    "span.min-w-\\[77px\\].bg-primary-200"
  );

  elements.forEach((el) => {
    if (!el) return;

    const updateOpacity = () => {
      const hasContent =
        el.textContent.trim().length > 0 || el.children.length > 0;
      if (el.textContent.trim() == "true") {
        el.textContent = "ویـژه";
      }

      el.style.opacity = hasContent ? "1" : "0";
    };

    updateOpacity();

    const observer = new MutationObserver(updateOpacity);
    observer.observe(el, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  });
});
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
if (document.getElementById("search-content-article")) {
  var input = document.getElementById("search-content-name"),
    isItemSelected = !1;
  if (input) {
    function contentSearched(e, t) {
      (input.value = e),
        (document.getElementById("catidsearched").value = t),
        document.querySelector(".search-content ul").classList.add("hidden"),
        document.querySelector(".search-content ul").classList.remove("flex"),
        (isItemSelected = !0);
    }
    input.onkeyup = function () {
      const dropdown = document.querySelector(".search-content ul");
      const items = document
        .querySelector(".search-content")
        .getElementsByTagName("li");

      const filter = this.value.trim().toUpperCase();
      isItemSelected = !1;

      if (filter.length > 0) {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("flex");

        for (let i = 0; i < items.length; i++) {
          items[i].innerHTML.toUpperCase().includes(filter)
            ? (items[i].style.display = "list-item")
            : (items[i].style.display = "none");
        }
      } else {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("flex");

        for (let i = 0; i < items.length; i++) {
          items[i].style.display = "list-item";
        }
      }
    };

    document
      .getElementById("search-content-article")
      .addEventListener("submit", function (e) {
        if (!isItemSelected) {
          e.preventDefault(),
            (document.getElementById("catidsearched").value = 0);
          for (
            var t = document
                .querySelector(".search-content")
                .getElementsByTagName("li"),
              n = 0;
            n < t.length;
            n++
          )
            t[n].style.display = "list-item";
          document
            .querySelector(".search-content ul")
            .classList.remove("hidden"),
            document.querySelector(".search-content ul").classList.add("flex");
        }
      });
    document.querySelectorAll(".search-drop-down li").forEach((e) => {
      const t = e.querySelector("span").innerText;
      e.addEventListener("click", () => {
        document.querySelector("#search-content-article").action = t;
      });
    });
  }
}

// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
document.addEventListener("DOMContentLoaded", function () {
  const headerB = document.querySelector("header.w-full");

  if (!headerB) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 1500) {
      headerB.style.position = "fixed";
      headerB.style.top = "0";
      headerB.style.left = "0";
      headerB.style.width = "100%";
      headerB.style.zIndex = "80";
      headerB.style.boxShadow = "0px 4px 20px 0px #27272714";
    } else {
      headerB.style.position = "";
      headerB.style.top = "";
      headerB.style.left = "";
      headerB.style.width = "";
      headerB.style.zIndex = "";
      headerB.style.boxShadow = "";
    }
  });
});
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// ________________________________
// function watchForSearchHistoryContent(callbackAdd, callbackRemove) {
//   const observer = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//       // بررسی افزودن
//       for (const node of mutation.addedNodes) {
//         if (node.nodeType === 1) {
//           if (
//             node.matches(".searchHistory-content.hotel-searchHistory") ||
//             node.querySelector(".searchHistory-content.hotel-searchHistory")
//           ) {
//             callbackAdd(node);
//           }
//         }
//       }

//       // بررسی حذف
//       for (const node of mutation.removedNodes) {
//         if (node.nodeType === 1) {
//           if (
//             node.matches(".searchHistory-content.hotel-searchHistory") ||
//             node.querySelector(".searchHistory-content.hotel-searchHistory")
//           ) {
//             callbackRemove(node);
//           }
//         }
//       }
//     }
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true,
//   });
// }

// function checkIfAnySearchHistoryExists() {
//   return (
//     document.querySelector(".searchHistory-content.hotel-searchHistory") !==
//     null
//   );
// }

// watchForSearchHistoryContent(
//   function (node) {
//     document.body.classList.add("search-history-added-ho");
//   },
//   function (node) {
//     setTimeout(() => {
//       if (!checkIfAnySearchHistoryExists()) {
//         document.body.classList.remove("search-history-added-ho");
//       }
//     }, 0);
//   }
// );
// _________________________________________
// function watchForSearchHistoryContent(callbackAdd, callbackRemove) {
//   const observer = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//       // بررسی افزودن
//       for (const node of mutation.addedNodes) {
//         if (node.nodeType === 1) {
//           if (
//             node.matches(".searchHistory-content.flight-searchHistory") ||
//             node.querySelector(".searchHistory-content.flight-searchHistory")
//           ) {
//             callbackAdd(node);
//           }
//         }
//       }

//       // بررسی حذف
//       for (const node of mutation.removedNodes) {
//         if (node.nodeType === 1) {
//           if (
//             node.matches(".searchHistory-content.flight-searchHistory") ||
//             node.querySelector(".searchHistory-content.flight-searchHistory")
//           ) {
//             callbackRemove(node);
//           }
//         }
//       }
//     }
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true,
//   });
// }

// function checkIfAnySearchHistoryExists() {
//   return (
//     document.querySelector(".searchHistory-content.flight-searchHistory") !==
//     null
//   );
// }

// watchForSearchHistoryContent(
//   function (node) {
//     document.body.classList.add("search-history-added-fl");
//   },
//   function (node) {
//     setTimeout(() => {
//       if (!checkIfAnySearchHistoryExists()) {
//         document.body.classList.remove("search-history-added-fl");
//       }
//     }, 0);
//   }
// );

// _________________________________________
// function watchForSearchHistoryContent(callbackAdd, callbackRemove) {
//   const observer = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//       // بررسی افزودن
//       for (const node of mutation.addedNodes) {
//         if (node.nodeType === 1) {
//           if (
//             node.matches(".searchHistory-content.flighthotel-searchHistory") ||
//             node.querySelector(
//               ".searchHistory-content.flighthotel-searchHistory"
//             )
//           ) {
//             callbackAdd(node);
//           }
//         }
//       }

//       // بررسی حذف
//       for (const node of mutation.removedNodes) {
//         if (node.nodeType === 1) {
//           if (
//             node.matches(".searchHistory-content.flighthotel-searchHistory") ||
//             node.querySelector(
//               ".searchHistory-content.flighthotel-searchHistory"
//             )
//           ) {
//             callbackRemove(node);
//           }
//         }
//       }
//     }
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true,
//   });
// }

// function checkIfAnySearchHistoryExists() {
//   return (
//     document.querySelector(
//       ".searchHistory-content.flighthotel-searchHistory"
//     ) !== null
//   );
// }

// watchForSearchHistoryContent(
//   function (node) {
//     document.body.classList.add("search-history-added-flh");
//   },
//   function (node) {
//     setTimeout(() => {
//       if (!checkIfAnySearchHistoryExists()) {
//         document.body.classList.remove("search-history-added-flh");
//       }
//     }, 0);
//   }
// );

function watchForSearchHistoryContent(callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          if (
            node.matches(".searchHistory-content") ||
            node.querySelector(".searchHistory-content")
          ) {
            callback(node);
            return;
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}
watchForSearchHistoryContent(function (node) {
  document.querySelector("body").classList.add("search-history-added");
});
// __________________
// __________________
// __________________
// __________________
document.querySelectorAll(".h-4-5r").forEach((hoverTarget) => {
  const megaMenu = hoverTarget.querySelector(".mega-menu");

  function showMegaMenu() {
    megaMenu.style.setProperty("display", "flex", "important");
  }

  function hideMegaMenu() {
    megaMenu.style.setProperty("display", "none", "important");
  }

  hoverTarget.addEventListener("mouseenter", showMegaMenu);
  megaMenu.addEventListener("mouseenter", showMegaMenu);

  hoverTarget.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!hoverTarget.matches(":hover") && !megaMenu.matches(":hover")) {
        hideMegaMenu();
      }
    }, 100);
  });

  megaMenu.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!hoverTarget.matches(":hover") && !megaMenu.matches(":hover")) {
        hideMegaMenu();
      }
    }, 240);
  });
});
