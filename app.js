(() => {
  "use strict";

  const copy = {
    en: {
      pageTitle: "GeoX — Geospatial World Models",
      pageDescription:
        "GeoX is a collaborative research initiative exploring geospatial world models through 3D reconstruction, maritime modeling and prediction, video generation, and physical environment modeling.",
      socialDescription:
        "Reconstruct. Generate. Predict. Exploring geospatial world models across space, time, and physics.",
      skip: "Skip to content",
      navVision: "Our vision",
      navResearch: "Research",
      navAbout: "About GeoX",
      navigation: "Main navigation",
      homeLabel: "GeoX home",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      switchLanguage: "Switch to Chinese",
      scrollVision: "Scroll to our vision",
      heroAlt:
        "Landsat 8 satellite view of coastal waters and sediment swirls at the Lena River Delta",
      heroEyebrow: "GEOSPATIAL WORLD MODELS",
      heroLine1: "A world to understand.",
      heroLine2: "New worlds to create.",
      heroDescription:
        "Connecting spatial intelligence, generative modeling, and physics-based prediction to explore the world beyond observation.",
      heroCta: "Explore our research",
      heroMantra: "RECONSTRUCT / GENERATE / PREDICT",
      heroLocation: "LENA RIVER DELTA · EARTH OBSERVATION",
      visionEyebrow: "01 / OUR VISION",
      visionLine1: "From observing the world.",
      visionLine2: "To predicting the world.",
      visionDescription:
        "The world is spatial, dynamic, and interconnected. Understanding it calls for models that bring geometry, appearance, motion, and physical processes together.",
      visionDescription2:
        "GeoX explores this shared foundation through four complementary research directions — from understanding scenes to predicting the future.",
      reconstruct: "Reconstruct.",
      reconstructText:
        "Recover the structure and state of the world from observations.",
      generate: "Generate.",
      generateText:
        "Explore new scenes and dynamic visual worlds through generative models.",
      predict: "Predict.",
      predictText:
        "Predict how environments evolve across space, time, and physical processes.",
      researchEyebrow: "02 / RESEARCH DIRECTIONS",
      researchLine1: "One world.",
      researchLine2: "Four perspectives.",
      researchIntro:
        "Across geometry, oceans, motion, and physics. Explore the questions that connect our research.",
      researchTabs: "Research directions",
      illustration: "RESEARCH ILLUSTRATION",
      image3d: "Illustrative aerial 3D scene with buildings and terrain",
      category3d: "SPATIAL INTELLIGENCE",
      title3d: "Reconstruct the world.\nCreate what comes next.",
      desc3d:
        "Exploring 3D reconstruction, scene generation, and spatial representations for geospatial environments across scales.",
      topic3d1: "Large-scale 3D reconstruction",
      topic3d2: "3D scene generation",
      topic3d3: "Spatial representations",
      domain3d: "GEOMETRY / APPEARANCE / SPACE",
      imageMarine:
        "Illustration of a maritime environment with vessels and coastal terrain",
      categoryMarine: "MARITIME INTELLIGENCE",
      titleMarine: "Complex waters.\nConnected worlds.",
      descMarine:
        "Studying world modeling and predicting dynamic change in complex ocean environments.",
      topicMarine1: "Maritime world modeling",
      topicMarine2: "Coastal environment prediction",
      topicMarine3: "Dynamic environment modeling",
      domainMarine: "OCEANS / VESSELS / ENVIRONMENTS",
      imageVideo:
        "Aerial coastal landscape illustrating video generation and dynamic visual environments",
      categoryVideo: "DYNAMIC VISUAL WORLDS",
      titleVideo: "Beyond a frame.\nInto a moving world.",
      descVideo:
        "Exploring video generation and spatiotemporal modeling for aerial imagery and other dynamic visual environments.",
      topicVideo1: "Aerial video generation",
      topicVideo2: "Camera-conditioned modeling",
      topicVideo3: "Spatiotemporal representations",
      domainVideo: "MOTION / PERSPECTIVE / TIME",
      imagePhysics:
        "Illustrative visualization of wind and physical environmental fields",
      categoryPhysics: "PHYSICAL ENVIRONMENTS",
      titlePhysics: "Invisible processes.\nNew perspectives.",
      descPhysics:
        "Investigating state reconstruction, super-resolution, and dynamic modeling of multiscale physical processes across the Earth system.",
      topicPhysics1: "Wind-field reconstruction",
      topicPhysics2: "Physical-field super-resolution",
      topicPhysics3: "Environmental dynamics",
      domainPhysics: "FIELDS / DYNAMICS / PHYSICS",
      aboutEyebrow: "03 / ABOUT GEOX",
      aboutLine1: "Across scales.",
      aboutLine2: "Across worlds.",
      aboutDescription:
        "GeoX is a collaborative research initiative for geospatial world models. We connect research in 3D reconstruction and generation, maritime modeling, video generation, and physical environments.",
      aboutDescription2:
        "A shared vision brings these directions together: developing richer representations of our world to reconstruct its structure, generate new scenes, and predict how environments evolve.",
      aboutCta: "Discover GeoX on GitHub",
      aboutCaption: "SPACE × TIME × PHYSICS",
      connectEyebrow: "FOLLOW THE EXPLORATION",
      connectHeading: "The next perspective\nstarts here.",
      connectDescription:
        "Explore our research initiative and follow future resources on GitHub.",
      connectCta: "Visit our GitHub",
      footerDescriptor:
        "Geospatial World Models\nReconstruct. Generate. Predict.",
      backTop: "Back to top",
    },
    zh: {
      pageTitle: "GeoX — 地理空间世界模型",
      pageDescription:
        "GeoX 是面向地理空间世界模型的联合科研计划，围绕三维重建与生成、船海建模与预测、视频生成以及物理环境建模开展研究。",
      socialDescription:
        "重建 · 生成 · 预测。连接空间、时间与物理过程，探索地理空间世界模型。",
      skip: "跳至主要内容",
      navVision: "研究愿景",
      navResearch: "研究方向",
      navAbout: "关于 GeoX",
      navigation: "主导航",
      homeLabel: "GeoX 首页",
      openMenu: "打开导航菜单",
      closeMenu: "关闭导航菜单",
      switchLanguage: "Switch to English / 切换为英文",
      scrollVision: "向下浏览研究愿景",
      heroAlt: "Landsat 8 卫星拍摄的勒拿河三角洲近海水域与泥沙涡流",
      heroEyebrow: "地理空间世界模型",
      heroLine1: "理解我们所处的世界。",
      heroLine2: "创造尚未抵达的世界。",
      heroDescription:
        "连接空间智能、生成式建模与物理过程预测，从观测出发，探索世界的更多可能。",
      heroCta: "探索研究方向",
      heroMantra: "重建 / 生成 / 预测",
      heroLocation: "勒拿河三角洲 · 地球观测",
      visionEyebrow: "01 / 研究愿景",
      visionLine1: "从观测世界，",
      visionLine2: "到预测世界。",
      visionDescription:
        "世界存在于空间之中，随时间演化，也由相互关联的过程构成。理解这样的世界，需要将几何、外观、运动与物理过程融为一体的模型。",
      visionDescription2:
        "GeoX 以四个相互支撑的研究方向探索这一共同基础，从场景理解走向预测未来。",
      reconstruct: "重建。",
      reconstructText: "从观测中恢复世界的结构与状态。",
      generate: "生成。",
      generateText: "通过生成式模型，探索新的场景与动态视觉世界。",
      predict: "预测。",
      predictText: "预测环境在空间、时间与物理过程中的演化。",
      researchEyebrow: "02 / 研究方向",
      researchLine1: "一个世界，",
      researchLine2: "四种视角。",
      researchIntro:
        "从几何空间到海洋环境，从视觉运动到物理过程，探索相互连接的研究问题。",
      researchTabs: "研究方向切换",
      illustration: "研究方向示意图",
      image3d: "包含建筑与地形的航拍三维场景示意图",
      category3d: "三维空间智能",
      title3d: "重建真实世界，\n生成新的空间。",
      desc3d: "面向不同尺度的地理空间环境，研究三维重建、场景生成与空间表示。",
      topic3d1: "大场景三维重建",
      topic3d2: "三维场景生成",
      topic3d3: "空间表示",
      domain3d: "几何 / 外观 / 空间",
      imageMarine: "包含船舶与海岸地形的船海环境示意图",
      categoryMarine: "船海智能",
      titleMarine: "复杂海域，\n相连的世界。",
      descMarine: "围绕复杂海洋环境，研究世界建模、动态演化与环境预测。",
      topicMarine1: "船海世界建模",
      topicMarine2: "海岸环境预测",
      topicMarine3: "动态环境建模",
      domainMarine: "海洋 / 船舶 / 环境",
      imageVideo: "用于说明视频生成与动态视觉环境的航拍海岸景观示意图",
      categoryVideo: "动态视觉世界",
      titleVideo: "从一帧画面，\n走向动态世界。",
      descVideo: "面向航拍影像等动态视觉环境，探索视频生成与时空建模方法。",
      topicVideo1: "航拍视频生成",
      topicVideo2: "相机条件建模",
      topicVideo3: "时空表示",
      domainVideo: "运动 / 视角 / 时间",
      imagePhysics: "风场及物理环境场的可视化示意图",
      categoryPhysics: "物理环境智能",
      titlePhysics: "让隐形过程，\n呈现新的视角。",
      descPhysics: "面向地球系统中的多尺度物理过程，研究状态重建、超分辨率与动态建模。",
      topicPhysics1: "风场重建",
      topicPhysics2: "物理场超分辨率",
      topicPhysics3: "环境动态建模",
      domainPhysics: "物理场 / 动态过程 / 物理规律",
      aboutEyebrow: "03 / 关于 GEOX",
      aboutLine1: "跨越尺度，",
      aboutLine2: "连接多元世界。",
      aboutDescription:
        "GeoX 是面向地理空间世界模型的联合科研计划，连接三维重建与生成、船海建模、视频生成以及物理环境等方向的研究。",
      aboutDescription2:
        "我们以共同愿景汇聚这些方向：构建更丰富的世界表示，探索场景重建、生成与环境演化预测。",
      aboutCta: "在 GitHub 了解 GeoX",
      aboutCaption: "空间 × 时间 × 物理",
      connectEyebrow: "关注我们的探索",
      connectHeading: "下一种视角，\n从这里开始。",
      connectDescription:
        "在 GitHub 了解 GeoX 研究计划，关注后续共享的研究资源。",
      connectCta: "访问 GitHub",
      footerDescriptor: "地理空间世界模型\n重建 · 生成 · 预测",
      backTop: "返回顶部",
    },
  };

  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const navigation = document.getElementById("main-nav");
  const menuButton = document.getElementById("menu-toggle");
  const languageButton = document.getElementById("language-button");
  const languageLabel = document.getElementById("language-label");
  let language = "en";
  let menuOpen = false;
  let motionQuery = null;
  try {
    motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  } catch {
    /* Motion remains progressive when preference APIs are unavailable. */
  }
  let reducedMotion = Boolean(motionQuery?.matches);
  const panelAnimations = new Set();
  const hero = document.querySelector(".hero");
  const revealItems = Array.from(
    document.querySelectorAll(
      ".section-marker, .vision-intro, .principles article, .section-heading, " +
        ".research-tabs, .research-visual, .research-panel .research-copy, " +
        ".about-content, .about-globe, .about-caption, .connect-inner, .footer-main",
    ),
  );
  let revealObserver = null;
  let heroObserver = null;
  let heroInView = true;

  function cancelPanelAnimations() {
    panelAnimations.forEach((animation) => animation.cancel());
    panelAnimations.clear();
  }

  function revealItem(element) {
    element.classList.add("is-visible");
  }

  function containsFocus(element) {
    return element.contains(document.activeElement);
  }

  function isOutsideViewport(bounds) {
    return bounds.bottom <= 0 || bounds.top >= window.innerHeight;
  }

  function resetOutsideItem(element, bounds) {
    if (isOutsideViewport(bounds) && !containsFocus(element)) {
      // Move farther out on the exit side. A fixed downward reset could push
      // a short item back into the observer at the top edge and flicker.
      element.style.setProperty(
        "--reveal-y",
        bounds.bottom <= 0 ? "-28px" : "28px",
      );
      element.classList.remove("is-visible");
    }
  }

  function resetItemAfterFocus(element) {
    if (containsFocus(element)) return;
    if (element.closest("[hidden]")) {
      element.classList.remove("is-visible");
      return;
    }
    resetOutsideItem(element, element.getBoundingClientRect());
  }

  function revealPanel(panel) {
    panel?.querySelectorAll(".reveal-item").forEach(revealItem);
  }

  function animatePanel(panel) {
    if (reducedMotion || !panel || typeof panel.animate !== "function")
      return;
    try {
      const animation = panel.animate(
        [
          { opacity: 0, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 420,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "none",
        },
      );
      panelAnimations.add(animation);
      animation.onfinish = animation.oncancel = () =>
        panelAnimations.delete(animation);
    } catch {
      /* A failed optional animation must never block the selected content. */
    }
  }

  function showAllMotionContent() {
    revealObserver?.disconnect();
    heroObserver?.disconnect();
    revealObserver = null;
    heroObserver = null;
    root.classList.remove("motion-ready");
    root.classList.add("hero-is-ready");
    revealItems.forEach((element) => element.classList.add("is-visible"));
    root.style.setProperty("--hero-offset", "0px");
  }

  function initializeMotion() {
    revealObserver?.disconnect();
    heroObserver?.disconnect();
    root.classList.remove("motion-ready");
    revealItems.forEach((element) => element.classList.add("reveal-item"));
    if (
      reducedMotion ||
      typeof window.IntersectionObserver !== "function" ||
      typeof window.requestAnimationFrame !== "function"
    ) {
      showAllMotionContent();
      return;
    }
    try {
      revealObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Enter after a small visible area; crossing this threshold on
              // exit never hides an item that remains on screen.
              if (entry.intersectionRatio >= 0.08 || containsFocus(entry.target))
                revealItem(entry.target);
            } else {
              resetOutsideItem(entry.target, entry.boundingClientRect);
            }
          });
        },
        { threshold: [0, 0.08], rootMargin: "0px" },
      );
      revealItems.forEach((element) => {
        // Hidden research panels are observed without measuring their layout.
        if (!element.closest("[hidden]")) {
          const bounds = element.getBoundingClientRect();
          if (!isOutsideViewport(bounds) || containsFocus(element)) {
            revealItem(element);
          } else {
            resetOutsideItem(element, bounds);
          }
        } else {
          element.classList.remove("is-visible");
        }
        revealObserver.observe(element);
      });
      if (hero) {
        heroInView = !isOutsideViewport(hero.getBoundingClientRect());
        heroObserver = new window.IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              heroInView = entry.isIntersecting;
              if (heroInView) {
                root.classList.add("hero-is-ready");
                updateScrollEffects();
              } else if (
                isOutsideViewport(entry.boundingClientRect) &&
                !containsFocus(hero)
              ) {
                root.classList.remove("hero-is-ready");
              }
            });
          },
          { threshold: 0 },
        );
        heroObserver.observe(hero);
      }
      // CSS only hides unrevealed items after both observers are usable.
      root.classList.add("motion-ready");
      window.requestAnimationFrame(() => {
        if (!hero || heroInView || containsFocus(hero)) {
          root.classList.add("hero-is-ready");
        } else {
          root.classList.remove("hero-is-ready");
        }
      });
    } catch {
      showAllMotionContent();
    }
  }

  // Keep translated line breaks without accepting HTML in the content strings.
  function setText(element, value) {
    const fragment = document.createDocumentFragment();
    value.split("\n").forEach((line, index) => {
      if (index) fragment.appendChild(document.createElement("br"));
      fragment.appendChild(document.createTextNode(line));
    });
    element.replaceChildren(fragment);
  }

  function setMeta(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute("content", value);
  }

  function setSocialLocale(property, value) {
    if (!document.querySelector('meta[property="og:type"]')) return;
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("property", property);
      document.head.appendChild(element);
    }
    element.setAttribute("content", value);
  }

  function updateMenuLabel() {
    if (menuButton) {
      menuButton.setAttribute(
        "aria-label",
        copy[language][menuOpen ? "closeMenu" : "openMenu"],
      );
    }
  }

  function setLanguage(nextLanguage) {
    language = Object.hasOwn(copy, nextLanguage) ? nextLanguage : "en";
    const text = copy[language];
    root.lang = language === "zh" ? "zh-CN" : "en";
    document.title = text.pageTitle;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = text[element.dataset.i18n];
      if (typeof value === "string") setText(element, value);
    });
    [
      ["data-i18n-alt", "alt"],
      ["data-i18n-aria", "aria-label"],
    ].forEach(([source, target]) => {
      document.querySelectorAll(`[${source}]`).forEach((element) => {
        const value = text[element.getAttribute(source)];
        if (typeof value === "string") element.setAttribute(target, value);
      });
    });
    if (languageLabel)
      languageLabel.textContent = language === "en" ? "中文" : "EN";
    if (languageButton) {
      languageButton.setAttribute("aria-label", text.switchLanguage);
      languageButton.setAttribute("title", text.switchLanguage);
      languageButton.setAttribute("lang", language === "en" ? "zh-CN" : "en");
    }
    if (navigation) navigation.setAttribute("aria-label", text.navigation);
    document
      .querySelectorAll(".brand")
      .forEach((element) => element.setAttribute("aria-label", text.homeLabel));
    document
      .querySelectorAll(".scroll-link")
      .forEach((element) =>
        element.setAttribute("aria-label", text.scrollVision),
      );
    updateMenuLabel();
    setMeta('meta[name="description"]', text.pageDescription);
    setMeta('meta[property="og:title"]', text.pageTitle);
    setMeta('meta[property="og:description"]', text.socialDescription);
    setMeta('meta[name="twitter:title"]', text.pageTitle);
    setMeta('meta[name="twitter:description"]', text.socialDescription);
    setMeta('meta[property="og:image:alt"]', text.heroAlt);
    setSocialLocale("og:locale", language === "zh" ? "zh_CN" : "en_US");
    setSocialLocale(
      "og:locale:alternate",
      language === "zh" ? "en_US" : "zh_CN",
    );
  }

  // Each page load starts in English; the switch remains available in-page.
  setLanguage("en");
  languageButton?.addEventListener("click", () =>
    setLanguage(language === "en" ? "zh" : "en"),
  );

  document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    function activateTab(selected, moveFocus = false, animate = true) {
      const changed = selected.getAttribute("aria-selected") !== "true";
      if (changed) cancelPanelAnimations();
      let selectedPanel = null;
      tabs.forEach((tab) => {
        const active = tab === selected;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        const panel = document.getElementById(
          tab.getAttribute("aria-controls"),
        );
        if (panel) {
          panel.hidden = !active;
          if (active) selectedPanel = panel;
        }
      });
      revealPanel(selectedPanel);
      if (moveFocus) selected.focus({ preventScroll: true });
      if (changed && animate) animatePanel(selectedPanel);
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(tab));
      tab.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft")
          next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault();
        activateTab(tabs[next], true);
      });
    });
    const initialTab =
      tabs.find((tab) => tab.getAttribute("aria-selected") === "true") ||
      tabs[0];
    if (initialTab) activateTab(initialTab, false, false);
  });

  function setMenu(open, restoreFocus = false) {
    menuOpen = Boolean(open && navigation && menuButton);
    navigation?.classList.toggle("is-open", menuOpen);
    document.body.classList.toggle("menu-open", menuOpen);
    menuButton?.setAttribute("aria-expanded", String(menuOpen));
    updateMenuLabel();
    if (restoreFocus) menuButton?.focus({ preventScroll: true });
  }
  setMenu(false);
  menuButton?.addEventListener("click", () => {
    if (menuOpen) {
      setMenu(false, true);
    } else {
      setMenu(true);
      navigation?.querySelector("a[href]")?.focus({ preventScroll: true });
    }
  });
  navigation?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("click", (event) => {
    if (
      menuOpen &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    )
      setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOpen) {
      event.preventDefault();
      setMenu(false, true);
    }
  });
  window.addEventListener(
    "resize",
    () => {
      if (
        menuOpen &&
        menuButton &&
        getComputedStyle(menuButton).display === "none"
      )
        setMenu(false);
    },
    { passive: true },
  );

  const sectionLinks = navigation
    ? Array.from(navigation.querySelectorAll('a[href^="#"]'))
    : [];
  const navSections = sectionLinks
    .map((link) => ({
      link,
      section: document.getElementById(link.getAttribute("href").slice(1)),
    }))
    .filter((item) => item.section);

  function updateActiveSection() {
    const position = window.innerHeight * 0.35;
    let active = null;
    navSections.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= position) active = item;
    });
    navSections.forEach((item) => {
      const selected = item === active;
      item.link.classList.toggle("is-active", selected);
      if (selected) item.link.setAttribute("aria-current", "location");
      else item.link.removeAttribute("aria-current");
    });
  }

  function updateHeader() {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  function updateScrollEffects() {
    const scroll = Math.max(0, window.scrollY);
    const distance = Math.max(0, root.scrollHeight - window.innerHeight);
    const progress = distance > 0 ? Math.min(1, scroll / distance) : 0;
    root.style.setProperty("--scroll-progress", String(progress));
    if (reducedMotion) {
      root.style.setProperty("--hero-offset", "0px");
    } else if (heroInView && root.classList.contains("motion-ready")) {
      root.style.setProperty("--hero-offset", `${-Math.min(24, scroll * 0.045)}px`);
    }
  }
  document.addEventListener("focusin", (event) => {
    const target = event.target;
    if (!target?.closest) return;
    let item = target.closest(".reveal-item");
    while (item) {
      revealItem(item);
      item = item.parentElement?.closest(".reveal-item");
    }
    revealPanel(target.closest(".research-panel"));
    if (target.closest(".hero")) root.classList.add("hero-is-ready");
  });
  document.addEventListener("focusout", (event) => {
    const target = event.target;
    if (!target?.closest) return;
    // Focus has moved by the next microtask. Do not hide a shared ancestor
    // when the next keyboard target is inside the same reveal item.
    const afterFocusMoves = () => {
      if (reducedMotion || !root.classList.contains("motion-ready")) return;
      let item = target.closest(".reveal-item");
      while (item) {
        resetItemAfterFocus(item);
        item = item.parentElement?.closest(".reveal-item");
      }
      const panel = target.closest(".research-panel");
      if (panel && !containsFocus(panel)) {
        panel.querySelectorAll(".reveal-item").forEach(resetItemAfterFocus);
      }
      if (
        target.closest(".hero") &&
        hero &&
        !containsFocus(hero) &&
        isOutsideViewport(hero.getBoundingClientRect())
      ) {
        root.classList.remove("hero-is-ready");
      }
    };
    if (typeof window.queueMicrotask === "function") {
      window.queueMicrotask(afterFocusMoves);
    } else {
      Promise.resolve().then(afterFocusMoves);
    }
  });
  function updateMotionPreference(event) {
    reducedMotion = Boolean(event.matches);
    if (reducedMotion) {
      cancelPanelAnimations();
      showAllMotionContent();
    } else {
      initializeMotion();
    }
    updateScrollEffects();
  }
  if (motionQuery?.addEventListener) {
    motionQuery.addEventListener("change", updateMotionPreference);
  } else if (motionQuery?.addListener) {
    motionQuery.addListener(updateMotionPreference);
  }
  initializeMotion();
  updateHeader();
  updateActiveSection();
  updateScrollEffects();
  let scrollFramePending = false;
  window.addEventListener(
    "scroll",
    () => {
      if (scrollFramePending) return;
      scrollFramePending = true;
      const updateScrollFrame = () => {
        updateHeader();
        updateActiveSection();
        updateScrollEffects();
        scrollFramePending = false;
      };
      if (typeof window.requestAnimationFrame === "function") {
        window.requestAnimationFrame(updateScrollFrame);
      } else {
        updateScrollFrame();
      }
    },
    { passive: true },
  );
  window.addEventListener(
    "resize",
    () => {
      updateActiveSection();
      updateScrollEffects();
    },
    { passive: true },
  );
  window.addEventListener("pageshow", () => {
    updateHeader();
    updateActiveSection();
    updateScrollEffects();
  });
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
