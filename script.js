/**
 * SYNAPSE — PREMIUM BRIGHT ARTIFICIAL INTELLIGENCE PLATFORM
 * Core JavaScript Engine & Interactive Behaviors
 * Pure Vanilla JavaScript (ES6+)
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive systems
  initScrollEngine();
  initMobileNavigation();
  initNeuralCanvas();
  initMetricsCounter();
  initTechExplorer();
  initApplicationsFilter();
  initToolsDirectory();
  initKnowledgeHub();
  initContactForm();
  initNewsletterForm();
  initBackToTop();
  initScrollReveal();
  initUniversalModal();
});

/* ==========================================================================
   1. Scroll Engine & Progress Bar
   ========================================================================== */
function initScrollEngine() {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Update progress bar
    if (progressBar && scrollHeight > 0) {
      const progressPercent = Math.min((scrollTop / scrollHeight) * 100, 100);
      progressBar.style.width = `${progressPercent}%`;
    }

    // Toggle header compact state
    if (header) {
      if (scrollTop > 35) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Active Section Tracking
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   2. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-close-btn');
  const backdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. Interactive Abstract AI Neural Network Canvas (Bright & Colorful)
   ========================================================================== */
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  const pulseBtn = document.getElementById('btn-trigger-pulse');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let nodes = [];
  let impulses = [];

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mouse interactivity coordinates
  const mouse = {
    x: null,
    y: null,
    radius: 170
  };

  // Colorful palette for light-mode neural nodes
  const nodePalette = [
    '#2563eb', // Electric Blue
    '#7c3aed', // Royal Violet
    '#06b6d4', // Vibrant Cyan
    '#ec4899', // Bright Magenta
    '#3b82f6'  // Sky Blue
  ];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createNodes();
  }

  function createNodes() {
    nodes = [];
    impulses = [];
    const nodeCount = Math.floor((width * height) / 14000);
    const count = Math.min(Math.max(nodeCount, 40), 90);

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.8),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.8),
        radius: Math.random() * 2.5 + 1.8,
        color: nodePalette[Math.floor(Math.random() * nodePalette.length)],
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.025 + Math.random() * 0.025
      });
    }
  }

  function addSynapticImpulse(startNode, endNode) {
    impulses.push({
      startX: startNode.x,
      startY: startNode.y,
      endX: endNode.x,
      endY: endNode.y,
      progress: 0,
      speed: 0.03 + Math.random() * 0.03,
      color: Math.random() > 0.5 ? '#2563eb' : '#ec4899'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    const maxDistance = 145;

    // 1. Draw connecting axons & trigger periodic impulses
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.32;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Action potentials along axons
          if (!prefersReducedMotion && Math.random() < 0.00035 && impulses.length < 25) {
            addSynapticImpulse(nodes[i], nodes[j]);
          }
        }
      }
    }

    // 2. Render & update synaptic impulses
    for (let i = impulses.length - 1; i >= 0; i--) {
      const imp = impulses[i];
      imp.progress += imp.speed;

      const currentX = imp.startX + (imp.endX - imp.startX) * imp.progress;
      const currentY = imp.startY + (imp.endY - imp.startY) * imp.progress;

      ctx.beginPath();
      ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
      ctx.fillStyle = imp.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = imp.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      if (imp.progress >= 1) {
        impulses.splice(i, 1);
      }
    }

    // 3. Update & render neural nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Mouse proximity interaction
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouse.radius) {
          const force = (1 - mdist / mouse.radius) * 0.8;
          node.x -= (mdx / mdist) * force * 1.5;
          node.y -= (mdy / mdist) * force * 1.5;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${force * 0.6})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      node.pulse += node.pulseSpeed;
      const pulseSize = node.radius + Math.sin(node.pulse) * 0.8;

      ctx.beginPath();
      ctx.arc(node.x, node.y, Math.max(pulseSize, 1), 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.shadowBlur = 4;
      ctx.shadowColor = node.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    animationFrameId = requestAnimationFrame(render);
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    resizeCanvas();
  });

  // Synaptic Energy Surge Button Action
  if (pulseBtn) {
    pulseBtn.addEventListener('click', () => {
      nodes.forEach((n) => {
        n.vx *= 3;
        n.vy *= 3;
        n.radius = Math.min(n.radius * 1.6, 6);
      });

      for (let i = 0; i < 24; i++) {
        const n1 = nodes[Math.floor(Math.random() * nodes.length)];
        const n2 = nodes[Math.floor(Math.random() * nodes.length)];
        if (n1 && n2 && n1 !== n2) {
          addSynapticImpulse(n1, n2);
        }
      }

      showToast('⚡ Synaptic energy surge triggered across neural pathways!', 'info');

      setTimeout(() => {
        nodes.forEach((n) => {
          n.vx = (Math.random() - 0.5) * 0.8;
          n.vy = (Math.random() - 0.5) * 0.8;
          n.radius = Math.random() * 2.5 + 1.8;
        });
      }, 1500);
    });
  }

  resizeCanvas();
  render();
}

/* ==========================================================================
   4. Live Metric Counters
   ========================================================================== */
function initMetricsCounter() {
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach((counter) => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
          const duration = 1800;
          const startTime = performance.now();

          function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = easeOutProgress * target;

            counter.textContent = currentValue.toFixed(decimals);

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              counter.textContent = target.toFixed(decimals);
            }
          }

          requestAnimationFrame(updateNumber);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const metricsBar = document.querySelector('.hero-metrics-bar');
  if (metricsBar) {
    observer.observe(metricsBar);
  }
}

/* ==========================================================================
   5. AI Technology Explorer (Interactive Dynamic Architecture)
   ========================================================================== */
const TECHNOLOGIES_DATA = {
  ai: {
    name: 'Artificial Intelligence',
    category: 'Universal Field & Synthetic Cognition',
    index: '01',
    lead: 'The overarching scientific discipline aimed at synthesizing computational architectures capable of autonomous reasoning, multi-modal perception, adaptive learning, and complex problem-solving.',
    howItWorks: 'AI constructs algorithmic models that map complex sensory and statistical inputs into probability distributions over actions, categories, or generated media using symbolic, probabilistic, or neural methods.',
    examples: 'Autonomous spacecraft navigation, clinical oncology decision-support systems, global high-frequency supply chains, and interactive synthetic assistants.',
    advantages: [
      'Continuous 24/7 high-speed analytical throughput without cognitive fatigue.',
      'Ability to isolate subtle non-linear correlations across multi-million dimensional data spaces.',
      'Drastically compresses scientific research timelines from decades to weeks.'
    ],
    applications: ['Robotic Surgery', 'Astrophysics Analysis', 'Financial Heuristics', 'Climate Modeling'],
    flow: 'Sensory Telemetry → Vector Projection → Inference Engine → Autonomous Action'
  },
  ml: {
    name: 'Machine Learning',
    category: 'Statistical Pattern Synthesis',
    index: '02',
    lead: 'The specialized core of AI where systems discover predictive mathematical functions directly from empirical datasets rather than requiring human programmers to hard-code explicit rules.',
    howItWorks: 'Iteratively minimizes an objective loss function across historical training samples using optimization algorithms like Gradient Descent, updating internal parameters to generalize to unseen data.',
    examples: 'Real-time credit card fraud interceptors, streaming recommendation engines, algorithmic price discovery, and disease vulnerability prediction.',
    advantages: [
      'Self-improves automatically as fresh production data streams into the system.',
      'Bypasses the impossible bottleneck of writing millions of handcrafted IF-ELSE statements.',
      'Robust statistical tolerance against noisy and missing real-world data points.'
    ],
    applications: ['Credit Scoring', 'Predictive Maintenance', 'Churn Forecasting', 'Biometric Classification'],
    flow: 'Sample Corpora (X, Y) → Gradient Descent → Parameter Convergence → Generalized Model'
  },
  dl: {
    name: 'Deep Learning',
    category: 'Hierarchical Multi-Layer Representation',
    index: '03',
    lead: 'A powerful subset of machine learning inspired by cortical columns, organizing artificial neurons into deep stacks of mathematical layers to extract representations at progressive levels of abstraction.',
    howItWorks: 'Raw signals pass through alternating linear transformations and non-linear activations (ReLU, GELU). Lower layers detect simple edges; middle layers parse textures; deep layers understand semantic concepts.',
    examples: 'Autonomous vehicle sensor fusion, real-time speech-to-speech translation, superhuman game-playing agents (AlphaGo), and automated CT scan segmentation.',
    advantages: [
      'Completely eliminates manual feature engineering — learns optimal features autonomously.',
      'Scales predictably with compute power and massive web-scale datasets.',
      'Achieves superhuman accuracy in computer vision and acoustic transcription.'
    ],
    applications: ['Autonomous Driving', 'Audio Synthesis', 'Medical Image Segmentation', 'Protein Folding'],
    flow: 'Raw Tensors → Layer L1 (Edges) → Layer L50 (Concepts) → Softmax Classification'
  },
  nlp: {
    name: 'Natural Language Processing (NLP)',
    category: 'Computational Semantics & LLMs',
    index: '04',
    lead: 'The intersection of computer science, linguistics, and deep learning focused on enabling machines to ingest, interpret, synthesize, and converse in natural human tongues.',
    howItWorks: 'Text is partitioned into numeric tokens and projected into high-dimensional semantic spaces. Self-attention mechanisms compute bidirectional relationships between every word in context simultaneously.',
    examples: 'Frontier Large Language Models (LLMs), automated multilingual translation engines, legal contract summarizers, and enterprise sentiment intelligence.',
    advantages: [
      'Enables fluid, natural human-to-computer communication in any global dialect.',
      'Rapidly distills thousands of research papers into structured actionable insights.',
      'Performs zero-shot reasoning across diverse human knowledge tasks.'
    ],
    applications: ['Semantic Document Search', 'Code Synthesis', 'Biomedical Literature Mining', 'Realtime Dubbing'],
    flow: 'Text String → Tokenizer Vectors → Multi-Head Attention → Next-Token Probability'
  },
  cv: {
    name: 'Computer Vision',
    category: 'Photometric Processing & Spatial Understanding',
    index: '05',
    lead: 'Equipping machines with visual perception to inspect, decompose, track, and extract geometric and semantic intelligence from digital photos, thermal feeds, and 3D point clouds.',
    howItWorks: 'Utilizes Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) to apply spatial filters across pixel arrays, isolating spatial hierarchies, bounding boxes, and surface depths.',
    examples: 'Smartphone Face ID authentication, manufacturing defect scanners, drone agricultural inspection, and spatial depth estimation in augmented reality.',
    advantages: [
      'Processes thousands of video frames per second with consistent microscopic precision.',
      'Detects invisible spectrum anomalies across infrared, ultraviolet, and hyperspectral bands.',
      'Automates tedious visual quality inspections on high-speed industrial assembly lines.'
    ],
    applications: ['Self-Driving Perception', 'Cancer Pathology', 'Satellite Geo-Surveying', 'Facial Biometrics'],
    flow: 'RGB Matrix [H, W, 3] → Convolutional Kernels → Bounding Boxes + Segmentation Masks'
  },
  genai: {
    name: 'Generative AI',
    category: 'Synthetic Creation & Diffusion Modeling',
    index: '06',
    lead: 'Frontier AI models capable of creating entirely novel, highly realistic artifacts — including studio-quality imagery, synthetic audio, software code, 3D meshes, and molecular structures.',
    howItWorks: 'Diffusion models learn to reverse gradual Gaussian noise destruction to synthesize images from latent noise; generative transformers predict sequential tokens conditioned on natural language prompts.',
    examples: 'Midjourney, Stable Diffusion, Claude, ChatGPT, GitHub Copilot, Suno audio synthesis, and automated synthetic medical data generation for training.',
    advantages: [
      'Accelerates creative prototyping from hours to instantaneous seconds.',
      'Democratizes software engineering and multi-modal creative production.',
      'Synthesizes privacy-compliant synthetic datasets to train other AI systems safely.'
    ],
    applications: ['Concept Art Generation', 'Full-Stack Software Dev', 'Synthetic Voice Dubbing', 'Drug Molecule Design'],
    flow: 'Natural Language Prompt → Latent Noise Inversion → Diffusion Denoising → High-Res Media'
  },
  robotics: {
    name: 'Robotics & Embodied AI',
    category: 'Kinematics & Physical World Interaction',
    index: '07',
    lead: 'The embodiment of artificial intelligence in physical machines equipped with actuators, force-torque sensors, and lidar to interact directly with the physical world.',
    howItWorks: 'Combines Vision-Language-Action (VLA) foundation models, inverse kinematics, and reinforcement learning in simulation (Sim2Real) to translate semantic instructions into joint motor trajectories.',
    examples: 'Warehouse fulfillment robots, humanoid assembly workers, surgical robotic arms, precision agricultural harvesters, and disaster search-and-rescue quadrupeds.',
    advantages: [
      'Executes dangerous, toxic, or physically grueling tasks without risking human life.',
      'Maintains sub-millimeter repeatable physical precision in cleanrooms and operating rooms.',
      'Operates reliably in extreme extraterrestrial or deep-sea environments.'
    ],
    applications: ['Warehouse Logistics', 'Laparoscopic Surgery', 'Planetary Exploration', 'Precision Sorting'],
    flow: 'Visual Scene Sensor → VLA Policy → Joint Velocity Vectors → Actuator Servo Motion'
  },
  nn: {
    name: 'Neural Networks & Transformers',
    category: 'Architectural Synaptic Fabrics',
    index: '08',
    lead: 'The foundational computational graph architecture underpinning all contemporary deep learning, modeled on interconnected mathematical perceptrons organized into layered matrices.',
    howItWorks: 'Information cascades through layers where each artificial synapse multiplies input by a weight scalar and adds bias. Backpropagation computes the partial derivative of error via the chain rule.',
    examples: 'Feed-forward networks, LSTMs, Transformers with self-attention, and spiking neuromorphic chips mimicking biological spiking dynamics.',
    advantages: [
      'Universal Function Approximator: mathematically capable of approximating any continuous function.',
      'Extremely parallelizable across thousands of specialized GPU tensor cores.',
      'Tolerant to individual node failure due to distributed representation of knowledge.'
    ],
    applications: ['Foundation Model Backbones', 'Speech Acoustic Models', 'Weather Forecasting', 'Game Theory'],
    flow: 'Inputs (X) → Matrix Multiply (W·X + b) → Non-linear Activation → Output Tensors'
  }
};

function initTechExplorer() {
  const tabs = document.querySelectorAll('.tech-tab');
  const display = document.getElementById('explorer-display');
  const footerJumps = document.querySelectorAll('.footer-tech-jump');

  if (!display || tabs.length === 0) return;

  function renderTechnology(techKey) {
    const data = TECHNOLOGIES_DATA[techKey] || TECHNOLOGIES_DATA.ai;

    display.style.opacity = '0';
    display.style.transform = 'translateY(8px)';

    setTimeout(() => {
      display.innerHTML = `
        <div class="tech-view-header">
          <div>
            <div class="tech-category-pill">${data.category}</div>
            <h3 class="tech-view-title">${data.name}</h3>
          </div>
          <span class="tech-view-index" aria-hidden="true">${data.index}</span>
        </div>

        <p class="tech-lead">${data.lead}</p>

        <div class="tech-content-grid">
          <div class="tech-block">
            <h4 class="tech-block-title">
              <span>⚙️</span> How It Works
            </h4>
            <p class="tech-block-body">${data.howItWorks}</p>
          </div>

          <div class="tech-block">
            <h4 class="tech-block-title">
              <span>🌍</span> Real-World Implementations
            </h4>
            <p class="tech-block-body">${data.examples}</p>
          </div>
        </div>

        <div class="tech-content-grid">
          <div class="tech-block">
            <h4 class="tech-block-title">
              <span>⚡</span> Architectural Advantages
            </h4>
            <ul class="tech-adv-list">
              ${data.advantages.map(adv => `<li><span class="bullet">▸</span> <span>${adv}</span></li>`).join('')}
            </ul>
          </div>

          <div class="tech-block">
            <h4 class="tech-block-title">
              <span>🎯</span> Core Target Applications
            </h4>
            <div class="tech-pill-group">
              ${data.applications.map(app => `<span class="tech-app-pill">${app}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="tech-architecture-preview">
          <span class="console-label">PIPELINE FLOW:</span>
          <span class="console-flow">${data.flow}</span>
        </div>
      `;

      display.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      display.style.opacity = '1';
      display.style.transform = 'translateY(0)';
    }, 180);
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const techKey = tab.getAttribute('data-tech');
      renderTechnology(techKey);
    });
  });

  footerJumps.forEach((jump) => {
    jump.addEventListener('click', (e) => {
      const techKey = jump.getAttribute('data-tech');
      const matchingTab = document.querySelector(`.tech-tab[data-tech="${techKey}"]`);
      if (matchingTab) {
        matchingTab.click();
      }
    });
  });

  renderTechnology('ai');
}

/* ==========================================================================
   6. AI in the Real World: Sector Filtering & Case Studies
   ========================================================================== */
const CASE_STUDIES_DATA = {
  healthcare: {
    sector: 'HEALTHCARE & LIFE SCIENCES',
    title: 'Early Oncology Detection via Convolutional Neural Networks',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'Medical institutions worldwide are deploying vision neural networks to inspect volumetric CT and MRI scans. By comparing micro-density variations against millions of verified biopsies, the model detects malignant cellular formations 18 months earlier than standard clinical detection.',
    highlights: [
      'Trained on 1.4 million validated anonymized radiological scans.',
      'Maintains a 94.8% sensitivity rate with near-zero false negatives.',
      'Integrates directly with hospital PACS (Picture Archiving) systems.'
    ],
    impact: 'Reduces diagnostic latency from 3 weeks to 90 seconds while substantially improving patient survivability rates.'
  },
  education: {
    sector: 'EDUCATION & COGNITIVE DEVELOPMENT',
    title: 'Adaptive Socratic Knowledge Synthesis for Global Classrooms',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    description: 'Adaptive learning platforms utilize knowledge-tracing neural networks to continuously model a student\'s grasp of mathematical and scientific concepts. Rather than presenting generic static textbooks, the system calibrates explanations to the student\'s exact cognitive gaps.',
    highlights: [
      'Generates contextual analogies based on student hobbies and interests.',
      'Supports speech input and output in over 100 regional languages.',
      'Specialized visual rendering aids for students with dyslexia and ADHD.'
    ],
    impact: 'Demonstrated a 2.5x acceleration in student conceptual mastery across pilot deployments.'
  },
  transportation: {
    sector: 'TRANSPORTATION & INFRASTRUCTURE',
    title: 'Full-Stack Sensor Fusion for Autonomous Urban Fleets',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    description: 'Autonomous mobility systems fuse multi-camera video, millimeter-wave radar, and 360-degree LiDAR point clouds into a unified 3D vector space (NeRF occupancy network), predicting the trajectories of pedestrians and vehicles 5 seconds into the future.',
    highlights: [
      'Sub-millisecond sensor fusion running locally on redundant drive computers.',
      'Validated across 10 million real-world urban autonomous miles.',
      'Dynamically balances municipal traffic signal timing to eliminate gridlocks.'
    ],
    impact: 'Reduces urban fatal collisions by an estimated 85% compared to distracted human drivers.'
  },
  finance: {
    sector: 'FINANCIAL SYSTEMS & RISK',
    title: 'Real-Time Heuristic Graph Networks for Global Fraud Interception',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    description: 'Tier-1 international banks process upwards of 100,000 credit transactions every second. Graph neural networks inspect dynamic transaction networks to isolate anomalous money laundering rings in under 5 milliseconds.',
    highlights: [
      'Sub-5ms decision latency with negligible payment terminal impact.',
      'Prevents $32 Billion in annual unauthorized financial transfers.',
      'Replaces rigid threshold rules with adaptive behavioural vectors.'
    ],
    impact: 'Protects consumer savings globally while cutting false credit card rejections by 60%.'
  },
  agriculture: {
    sector: 'AGRICULTURE & AGRONOMY',
    title: 'Autonomous Drone Diagnostics & Millimeter Precision Spraying',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
    description: 'Autonomous multi-spectral agricultural drones survey vast farm fields, evaluating leaf chlorophyll content, soil moisture levels, and localized insect infestations. Robotic tractors then spray individual weeds with micro-jets of herbicide.',
    highlights: [
      'Cuts chemical herbicide usage by over 90% via targeted micro-spraying.',
      'Early blight and fungal spore detection before crop field manifestation.',
      'Satellite-linked yield forecasting assists food bank supply chains.'
    ],
    impact: 'Boosts per-hectare crop yields by 28% while radically cutting groundwater chemical runoff.'
  },
  entertainment: {
    sector: 'MEDIA, GAMING & ENTERTAINMENT',
    title: 'Real-Time Neural Radiance Fields (NeRF) for Dynamic Virtual Worlds',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    description: 'Video game engines and cinema VFX studios utilize neural rendering to transform flat photographs into fully interactive 3D virtual environments with photorealistic global illumination and responsive AI-driven non-player characters.',
    highlights: [
      'Compresses 100GB of 3D geometry and texture assets into a 50MB neural weight matrix.',
      'Allows real-time ray-traced lighting on consumer graphics hardware.',
      'Provides non-player characters with persistent conversational memory.'
    ],
    impact: 'Accelerates game studio world-building by a factor of 10x while enabling emergent storytelling.'
  },
  manufacturing: {
    sector: 'INDUSTRIAL AUTOMATION & MANUFACTURING',
    title: 'Digital Factory Twins & Autonomous Robotic Assembly',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'Industrial assembly plants leverage optical computer vision to inspect circuit boards and mechanical joints at microscopic resolutions, paired with acoustic vibration models that predict mechanical bearing wear weeks in advance.',
    highlights: [
      'Catches sub-millimeter solder bridge defects at 2,000 components per minute.',
      'Reduces unscheduled factory downtime by 45% through predictive maintenance.',
      'Robotic arm grippers autonomously handle diverse objects without reprogramming.'
    ],
    impact: 'Increases manufacturing throughput efficiency while minimizing industrial electronic waste.'
  },
  cybersecurity: {
    sector: 'CYBERSECURITY & DEFENSE',
    title: 'Autonomous Zero-Day Threat Mitigation & Heuristic Isolation',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    description: 'Defensive cybersecurity neural agents analyze network packet telemetry, memory buffer patterns, and kernel execution flows to identify unseen zero-day malware variants, automatically quarantining infected nodes within seconds.',
    highlights: [
      'Neutralizes zero-day ransomware before files can be systematically encrypted.',
      'Deconstructs polymorphic code sequences in isolated virtual sandboxes.',
      'Learns continuously from synthetic adversarial simulation runs.'
    ],
    impact: 'Achieves a 99.7% detection rate against novel malware while safeguarding critical national infrastructure.'
  }
};

function initApplicationsFilter() {
  const filterBtns = document.querySelectorAll('.sector-filters .filter-btn');
  const cards = document.querySelectorAll('.applications-grid .app-card');
  const modalBtns = document.querySelectorAll('.app-modal-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const sector = card.getAttribute('data-sector');
        if (filter === 'all' || sector === filter) {
          card.style.display = 'flex';
          card.classList.add('fade-up', 'visible');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  modalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const appKey = btn.getAttribute('data-app');
      const caseData = CASE_STUDIES_DATA[appKey];
      if (caseData) {
        openModalWithCaseStudy(caseData);
      }
    });
  });
}

/* ==========================================================================
   7. AI Tools Discovery (Search & Dynamic Directory)
   ========================================================================== */
const AI_TOOLS_DATA = [
  {
    name: 'ChatGPT',
    category: 'chat-llm',
    categoryLabel: 'LLMs & Chat',
    icon: '💬',
    desc: 'The conversational foundation model platform by OpenAI, capable of complex natural language dialogue, code synthesis, logical analysis, and creative writing.',
    purpose: 'Everyday cognitive assistance, writing, learning, and automated reasoning.',
    url: 'https://chatgpt.com'
  },
  {
    name: 'Google Gemini',
    category: 'chat-llm',
    categoryLabel: 'Multimodal AI',
    icon: '✨',
    desc: 'Google DeepMind\'s native multimodal flagship model designed from the ground up to seamlessly process text, audio, images, video, and code across massive context windows.',
    purpose: 'Deep multimodal research, real-time audio reasoning, and workspace productivity.',
    url: 'https://gemini.google.com'
  },
  {
    name: 'Claude',
    category: 'chat-llm',
    categoryLabel: 'LLMs & Safety',
    icon: '🧠',
    desc: 'Anthropic\'s constitutional AI assistant, engineered for industry-leading nuance, complex document analysis, creative coding, and safe, reliable decision support.',
    purpose: 'Complex document parsing, nuanced technical writing, and coding collaboration.',
    url: 'https://claude.ai'
  },
  {
    name: 'GitHub Copilot',
    category: 'code-dev',
    categoryLabel: 'Code & Dev',
    icon: '💻',
    desc: 'The AI pair programmer integrated directly inside IDEs, turning natural language prompts into working code, unit tests, and terminal CLI explanations.',
    purpose: 'Accelerating software engineering, boilerplate eradication, and test authoring.',
    url: 'https://github.com/features/copilot'
  },
  {
    name: 'Midjourney',
    category: 'creative-media',
    categoryLabel: 'Image Synthesis',
    icon: '🎨',
    desc: 'An independent research lab producing frontier text-to-image diffusion models known for exceptional artistic aesthetics, lighting fidelity, and imaginative compositions.',
    purpose: 'Concept art generation, architectural visualization, and marketing design.',
    url: 'https://www.midjourney.com'
  },
  {
    name: 'Perplexity AI',
    category: 'research-search',
    categoryLabel: 'Search & Knowledge',
    icon: '🔍',
    desc: 'A conversational answer engine that pairs web search with LLM reasoning to synthesize real-time answers with verified inline academic and journalism citations.',
    purpose: 'Fast fact-checked research, news synthesis, and academic literature discovery.',
    url: 'https://www.perplexity.ai'
  },
  {
    name: 'Runway ML',
    category: 'creative-media',
    categoryLabel: 'Video Generation',
    icon: '🎬',
    desc: 'Applied AI video generation platform providing text-to-video, video-to-video, motion brush control, and camera kinematics for next-generation cinematic filmmakers.',
    purpose: 'Studio-grade generative visual effects and narrative video production.',
    url: 'https://runwayml.com'
  },
  {
    name: 'ElevenLabs',
    category: 'creative-media',
    categoryLabel: 'Audio & Speech',
    icon: '🎙️',
    desc: 'Industry-standard synthetic voice platform offering hyper-realistic speech synthesis, emotional voice cloning, and real-time multilingual video dubbing.',
    purpose: 'Audiobook narration, game character dialogue, and global video localization.',
    url: 'https://elevenlabs.io'
  },
  {
    name: 'Cursor',
    category: 'code-dev',
    categoryLabel: 'AI Code Editor',
    icon: '⚡',
    desc: 'A native AI-first code editor built as a fork of VS Code, engineered for whole-codebase indexing, multi-file diff generation, and agentic refactoring.',
    purpose: 'Autonomous full-stack engineering and instant codebase understanding.',
    url: 'https://www.cursor.com'
  },
  {
    name: 'Stable Diffusion',
    category: 'creative-media',
    categoryLabel: 'Open Source Diffusion',
    icon: '🌌',
    desc: 'Stability AI\'s family of open-weights latent diffusion models, empowering developers to run state-of-the-art photorealistic image generation locally on consumer GPUs.',
    purpose: 'Open-source commercial media generation and on-premise custom model fine-tuning.',
    url: 'https://stability.ai'
  },
  {
    name: 'Hugging Face',
    category: 'code-dev',
    categoryLabel: 'Model Hub & Ecosystem',
    icon: '🤗',
    desc: 'The central open-source community platform and repository hosting over 500,000 machine learning models, datasets, and interactive Spaces demos for the AI community.',
    purpose: 'Open machine learning collaboration, model hosting, and transformer library access.',
    url: 'https://huggingface.co'
  },
  {
    name: 'DeepL Translate',
    category: 'research-search',
    categoryLabel: 'Neural Translation',
    icon: '🌐',
    desc: 'A specialized neural machine translation service capturing colloquial nuances, cultural idioms, and technical corporate phrasing far more accurately than literal translators.',
    purpose: 'High-precision document translation for international legal and technical diplomacy.',
    url: 'https://www.deepl.com'
  }
];

function initToolsDirectory() {
  const toolsGrid = document.getElementById('tools-grid');
  const searchInput = document.getElementById('tool-search');
  const clearBtn = document.getElementById('clear-search-btn');
  const filterBtns = document.querySelectorAll('.tools-filter-pills .tool-filter-btn');
  const counterLabel = document.getElementById('tools-counter');
  const emptyState = document.getElementById('tools-empty-state');
  const emptyQueryTerm = document.getElementById('empty-query-term');
  const resetBtn = document.getElementById('reset-tools-filter');

  if (!toolsGrid) return;

  let currentCategory = 'all';
  let currentSearchQuery = '';

  function renderTools() {
    const filtered = AI_TOOLS_DATA.filter((tool) => {
      const matchesCategory = (currentCategory === 'all' || tool.category === currentCategory);
      const query = currentSearchQuery.toLowerCase().trim();
      const matchesQuery = !query || 
        tool.name.toLowerCase().includes(query) ||
        tool.desc.toLowerCase().includes(query) ||
        tool.purpose.toLowerCase().includes(query) ||
        tool.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });

    if (counterLabel) {
      counterLabel.textContent = `Displaying ${filtered.length} of ${AI_TOOLS_DATA.length} verified frontier AI tools`;
    }

    if (filtered.length === 0) {
      toolsGrid.innerHTML = '';
      if (emptyState) {
        emptyState.style.display = 'block';
        if (emptyQueryTerm) emptyQueryTerm.textContent = currentSearchQuery;
      }
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    toolsGrid.innerHTML = filtered.map((tool) => `
      <article class="tool-card card-glass glow-card">
        <div class="tool-header">
          <div class="tool-icon-wrapper" aria-hidden="true">${tool.icon}</div>
          <div class="tool-meta">
            <h3 class="tool-name">${tool.name}</h3>
            <span class="tool-cat-badge">${tool.categoryLabel}</span>
          </div>
        </div>
        <p class="tool-desc">${tool.desc}</p>
        <div class="tool-purpose-box">
          <span class="purpose-label">Main Purpose:</span>
          <span class="purpose-text">${tool.purpose}</span>
        </div>
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link-btn" aria-label="Visit official website for ${tool.name}">
          <span>Visit Official Platform</span>
          <svg class="tool-link-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 8.667v4a1.333 1.333 0 01-1.333 1.333H3.333A1.333 1.333 0 012 12.667V5.333A1.333 1.333 0 013.333 4h4M10 2h4v4M6.667 9.333L14 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </article>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = currentSearchQuery.length > 0 ? 'block' : 'none';
      }
      renderTools();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearchQuery = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      renderTools();
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-tool-category');
      renderTools();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      if (clearBtn) clearBtn.style.display = 'none';
      currentCategory = 'all';
      filterBtns.forEach(b => {
        b.classList.remove('active');
        if (b.getAttribute('data-tool-category') === 'all') b.classList.add('active');
      });
      renderTools();
    });
  }

  renderTools();
}

/* ==========================================================================
   8. Interactive AI Knowledge Hub (Facts, Glossary & Quiz)
   ========================================================================== */
const QUIZ_QUESTIONS = [
  {
    question: 'What is the fundamental difference between model "Training" and "Inference"?',
    options: [
      'Training updates internal neural weights using error signals, while inference uses fixed weights to make predictions.',
      'Training runs on smartphones, while inference requires thousands of supercomputing clusters.',
      'Training is completely error-free, whereas inference always produces hallucinations.',
      'Training only processes text, whereas inference only generates pixels.'
    ],
    correctIndex: 0,
    explanation: 'Correct! Training is the computationally intensive process of adjusting weights using backpropagation. Inference occurs after training, applying those frozen weights to evaluate new queries.'
  },
  {
    question: 'In which machine learning paradigm does an agent learn optimal behavior by receiving positive rewards or negative penalties from its environment?',
    options: [
      'Supervised Learning',
      'Unsupervised Clustering',
      'Reinforcement Learning',
      'Rule-Based Heuristic Programming'
    ],
    correctIndex: 2,
    explanation: 'Correct! Reinforcement Learning (RL) operates on an agent-environment loop where the system iteratively learns a policy that maximizes cumulative reward signals over time.'
  },
  {
    question: 'Why do Large Language Models (LLMs) occasionally produce "Hallucinations"?',
    options: [
      'They calculate statistical plausibility of next tokens rather than possessing an internal factual database.',
      'The servers running the models experience random electrical shorts during inference.',
      'The human developers intentionally code fictional stories into the source files.',
      'They lack internet cables connected to the computers.'
    ],
    correctIndex: 0,
    explanation: 'Correct! LLMs are generative statistical predictors optimized to produce contextually fluent text, not verified fact-retrieval engines. This makes them prone to confident fabrications unless grounded by external search.'
  },
  {
    question: 'Which revolutionary architecture introduced the "Self-Attention" mechanism in the landmark 2017 Google Research paper?',
    options: [
      'Convolutional Neural Network (CNN)',
      'Transformer Architecture',
      'Recurrent Neural Network (RNN)',
      'Single-Layer Perceptron'
    ],
    correctIndex: 1,
    explanation: 'Correct! The Transformer ("Attention Is All You Need", 2017) revolutionized modern AI by allowing models to process all input tokens concurrently and weigh their cross-document relationships.'
  }
];

function initKnowledgeHub() {
  const factCards = document.querySelectorAll('.facts-grid .fact-card');
  factCards.forEach((card) => {
    function toggleCard() {
      const isRevealed = card.classList.contains('revealed');
      card.classList.toggle('revealed');
      card.setAttribute('aria-expanded', !isRevealed);
    }

    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
      }
    });
  });

  const glossarySearch = document.getElementById('glossary-search');
  const glossaryCards = document.querySelectorAll('.glossary-grid .glossary-card');
  const glossaryCount = document.getElementById('glossary-count');

  if (glossarySearch) {
    glossarySearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      let visible = 0;

      glossaryCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          card.style.display = 'flex';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });

      if (glossaryCount) {
        glossaryCount.textContent = `Showing ${visible} of ${glossaryCards.length} core terms`;
      }
    });
  }

  const quizCard = document.getElementById('quiz-card');
  const progressText = document.getElementById('quiz-progress-text');
  const scoreBadge = document.getElementById('quiz-score-badge');

  if (!quizCard) return;

  let currentQuestionIndex = 0;
  let currentScore = 0;

  function renderQuizQuestion() {
    const q = QUIZ_QUESTIONS[currentQuestionIndex];
    if (progressText) {
      progressText.textContent = `Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    }
    if (scoreBadge) {
      scoreBadge.textContent = `Score: ${currentScore} / ${QUIZ_QUESTIONS.length}`;
    }

    const optionLetters = ['A', 'B', 'C', 'D'];

    quizCard.innerHTML = `
      <h4 class="quiz-question-title">${q.question}</h4>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt-btn" data-index="${i}">
            <span class="quiz-opt-letter">${optionLetters[i]}</span>
            <span class="quiz-opt-text">${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback-box" id="quiz-feedback" style="display: none;"></div>
      <div id="quiz-action-bar" style="display: none; text-align: right;">
        <button class="btn btn-primary btn-sm" id="btn-next-question">
          <span>${currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? 'View Final Results' : 'Next Question'}</span>
          <svg class="btn-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    `;

    const optBtns = quizCard.querySelectorAll('.quiz-opt-btn');
    const feedbackBox = document.getElementById('quiz-feedback');
    const actionBar = document.getElementById('quiz-action-bar');
    const nextBtn = document.getElementById('btn-next-question');

    optBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedIndex = parseInt(btn.getAttribute('data-index'), 10);
        const isCorrect = selectedIndex === q.correctIndex;

        optBtns.forEach((b, idx) => {
          b.disabled = true;
          if (idx === q.correctIndex) {
            b.classList.add('correct');
          } else if (idx === selectedIndex) {
            b.classList.add('incorrect');
          }
        });

        if (isCorrect) {
          currentScore++;
          if (scoreBadge) scoreBadge.textContent = `Score: ${currentScore} / ${QUIZ_QUESTIONS.length}`;
          feedbackBox.className = 'quiz-feedback-box correct';
          feedbackBox.innerHTML = `<strong>✨ Correct!</strong> ${q.explanation}`;
        } else {
          feedbackBox.className = 'quiz-feedback-box incorrect';
          feedbackBox.innerHTML = `<strong>❌ Not quite.</strong> The correct answer was (${optionLetters[q.correctIndex]}). ${q.explanation}`;
        }

        feedbackBox.style.display = 'block';
        if (actionBar) actionBar.style.display = 'block';
      });
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < QUIZ_QUESTIONS.length) {
          renderQuizQuestion();
        } else {
          renderQuizResults();
        }
      });
    }
  }

  function renderQuizResults() {
    const percentage = Math.round((currentScore / QUIZ_QUESTIONS.length) * 100);
    let message = '';
    let icon = '🏆';

    if (percentage === 100) {
      message = 'Mastery Achieved! You demonstrated an exceptional grasp of contemporary AI architecture.';
    } else if (percentage >= 75) {
      message = 'Great Performance! You have a solid conceptual foundation in artificial intelligence principles.';
    } else {
      message = 'Good Effort! Review the Foundational Intelligence and Glossary sections to deepen your knowledge.';
      icon = '💡';
    }

    quizCard.innerHTML = `
      <div style="text-align: center; padding: 1.5rem 0;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">${icon}</div>
        <h4 style="font-family: var(--font-display); font-size: 1.8rem; color: var(--text-primary); margin-bottom: 0.5rem;">
          Quiz Completed!
        </h4>
        <div style="font-size: 1.25rem; color: var(--accent-blue); font-weight: 700; margin-bottom: 1rem;">
          Final Score: ${currentScore} / ${QUIZ_QUESTIONS.length} (${percentage}%)
        </div>
        <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 2rem; line-height: 1.6;">
          ${message}
        </p>
        <button class="btn btn-primary glow-btn" id="btn-retake-quiz">
          <span>Retake Concept Quiz</span>
        </button>
      </div>
    `;

    const retakeBtn = document.getElementById('btn-retake-quiz');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        currentScore = 0;
        renderQuizQuestion();
      });
    }
  }

  renderQuizQuestion();
}

/* ==========================================================================
   9. Contact Form & Client-Side Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectSelect = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const consentCheckbox = document.getElementById('contact-consent');
  const charCounter = document.getElementById('char-counter');
  const submitBtn = document.getElementById('btn-submit-form');
  const formAlert = document.getElementById('form-alert');

  if (!form) return;

  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const length = messageInput.value.length;
      charCounter.textContent = `${length} / 500`;
      if (length >= 480) {
        charCounter.style.color = 'var(--accent-rose)';
      } else {
        charCounter.style.color = 'var(--text-muted)';
      }
    });
  }

  [nameInput, emailInput, subjectSelect, messageInput, consentCheckbox].forEach((field) => {
    if (!field) return;
    const eventName = field.tagName === 'SELECT' || field.type === 'checkbox' ? 'change' : 'input';
    field.addEventListener(eventName, () => {
      const group = field.closest('.form-group');
      if (group) {
        group.classList.remove('has-error');
      }
      if (formAlert) formAlert.style.display = 'none';
    });
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    let firstInvalidField = null;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      isValid = false;
      document.getElementById('group-name').classList.add('has-error');
      if (!firstInvalidField) firstInvalidField = nameInput;
    } else {
      document.getElementById('group-name').classList.remove('has-error');
      document.getElementById('group-name').classList.add('has-success');
    }

    if (!validateEmail(emailInput.value.trim())) {
      isValid = false;
      document.getElementById('group-email').classList.add('has-error');
      if (!firstInvalidField) firstInvalidField = emailInput;
    } else {
      document.getElementById('group-email').classList.remove('has-error');
      document.getElementById('group-email').classList.add('has-success');
    }

    if (!subjectSelect.value) {
      isValid = false;
      document.getElementById('group-subject').classList.add('has-error');
      if (!firstInvalidField) firstInvalidField = subjectSelect;
    } else {
      document.getElementById('group-subject').classList.remove('has-error');
      document.getElementById('group-subject').classList.add('has-success');
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 15) {
      isValid = false;
      document.getElementById('group-message').classList.add('has-error');
      if (!firstInvalidField) firstInvalidField = messageInput;
    } else {
      document.getElementById('group-message').classList.remove('has-error');
      document.getElementById('group-message').classList.add('has-success');
    }

    if (!consentCheckbox.checked) {
      isValid = false;
      document.getElementById('group-consent').classList.add('has-error');
      if (!firstInvalidField) firstInvalidField = consentCheckbox;
    } else {
      document.getElementById('group-consent').classList.remove('has-error');
    }

    if (!isValid) {
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      showToast('⚠️ Please review highlighted fields in the transmission form.', 'info');
      return;
    }

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      const userName = nameInput.value.trim();
      form.reset();
      if (charCounter) charCounter.textContent = '0 / 500';

      document.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-success'));

      showToast(`✨ Transmission simulated successfully for ${userName}!`, 'success');
      openModalWithTransmissionConfirmation(userName);
    }, 1200);
  });
}

function openModalWithTransmissionConfirmation(userName) {
  const modalBody = document.getElementById('modal-body');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="text-align: center; padding: 1.5rem 0;">
      <div style="font-size: 3.5rem; margin-bottom: 1rem;">📡</div>
      <div class="modal-tag">SYNAPSE PROTOCOL CONFIRMATION</div>
      <h3 class="modal-title">Transmission Simulated Successfully</h3>
      <p class="modal-text" style="max-width: 500px; margin: 0 auto 1.5rem;">
        Thank you, <strong>${userName}</strong>. Your inquiry has been verified through our client-side validation engine.
      </p>
      <div class="modal-highlights" style="text-align: left; max-width: 500px; margin: 0 auto 1.75rem;">
        <h4>Demonstration Security Protocol</h4>
        <ul>
          <li><strong>Execution Context:</strong> Frontend-Only Student Demo (Vanilla JS)</li>
          <li><strong>Data Sanitization:</strong> XSS-safe DOM parameterization verified</li>
          <li><strong>Network Footprint:</strong> Zero sensitive data broadcasted to external databases</li>
        </ul>
      </div>
      <button class="btn btn-primary btn-block" id="modal-confirm-close-btn">
        <span>Close Acknowledgment</span>
      </button>
    </div>
  `;

  const modalOverlay = document.getElementById('info-modal');
  if (modalOverlay) modalOverlay.classList.add('open');

  const confirmBtn = document.getElementById('modal-confirm-close-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', closeModal);
  }
}

/* ==========================================================================
   10. Newsletter Form
   ========================================================================== */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  const msg = document.getElementById('newsletter-msg');

  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!re.test(email)) {
      if (msg) {
        msg.style.color = 'var(--accent-rose)';
        msg.textContent = 'Please provide a valid research email.';
      }
      return;
    }

    input.value = '';
    if (msg) {
      msg.style.color = 'var(--accent-emerald)';
      msg.textContent = '✓ Subscribed to Synapse Monthly Dispatches!';
    }
    showToast('📰 Subscribed to Synapse AI Monthly Dispatches!', 'success');

    setTimeout(() => {
      if (msg) msg.textContent = '';
    }, 4000);
  });
}

/* ==========================================================================
   11. Universal Modal System (Case Studies & Confirmations)
   ========================================================================== */
function initUniversalModal() {
  const overlay = document.getElementById('info-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!overlay) return;

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
    }
  });
}

function closeModal() {
  const overlay = document.getElementById('info-modal');
  if (overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function openModalWithCaseStudy(caseData) {
  const modalBody = document.getElementById('modal-body');
  const overlay = document.getElementById('info-modal');
  if (!modalBody || !overlay) return;

  modalBody.innerHTML = `
    <div class="modal-tag">${caseData.sector}</div>
    <h3 class="modal-title">${caseData.title}</h3>
    <div class="modal-media">
      <img src="${caseData.image}" alt="${caseData.title}" loading="lazy">
    </div>
    <p class="modal-text">${caseData.description}</p>
    <div class="modal-highlights">
      <h4>Verified Operational Metrics</h4>
      <ul>
        ${caseData.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
    <p class="modal-text" style="font-size: 0.88rem; color: var(--accent-blue); margin-bottom: 1.5rem; font-weight: 600;">
      <strong>Global Impact:</strong> ${caseData.impact}
    </p>
    <button class="btn btn-secondary btn-block" id="modal-inner-close">
      <span>Return to Applications</span>
    </button>
  `;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const innerClose = document.getElementById('modal-inner-close');
  if (innerClose) innerClose.addEventListener('click', closeModal);
}

/* ==========================================================================
   12. Toast Notification Engine
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  const icon = type === 'success' ? '✓' : (type === 'error' ? '⚠️' : '⚡');

  toast.innerHTML = `
    <span style="font-weight: bold; color: ${type === 'success' ? 'var(--accent-emerald)' : 'var(--accent-blue)'}">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3800);
}

/* ==========================================================================
   13. Floating Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   14. Scroll Reveal Animations (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.fade-up');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}
