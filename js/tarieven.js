// Tarievenpagina: KNMT/NZa 2026 (uit tarievenboekje KNMT 2026 in deze repo)
// Dataset is bewust compact: veelvoorkomende prestaties + duidelijke categorieën.

(() => {
  const root = document.documentElement;

  const euro = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  /**
   * KNMT 2026 (NZa maximumtarieven) – uitgebreide lijst volgens officiële KNMT categorieën.
   * Tarieven zijn ~1,12% lager dan 2025 (conform NZa besluit).
   */
  const KNMT_TARIEVEN_2026 = [
    // ===== C: CONSULTATIE & DIAGNOSTIEK =====
    { code: "C001", omschrijving: "Consult t.b.v. intake (nieuwe patiënt)", punten: 7.51, tarief: 57.01, eenheid: "per consult" },
    { code: "C002", omschrijving: "Consult voor een periodieke controle", punten: 3.76, tarief: 28.51, eenheid: "per consult" },
    { code: "C003", omschrijving: "Consult (niet zijnde periodieke controle)", punten: 3.76, tarief: 28.51, eenheid: "per consult" },
    { code: "C010", omschrijving: "Aanvullende medische anamnese", punten: 3.76, tarief: 28.51, eenheid: "per consult" },
    { code: "C011", omschrijving: "Uitgebreid onderzoek (second opinion)", punten: 17.80, tarief: 135.03, eenheid: "per onderzoek" },
    { code: "C013", omschrijving: "Studiemodellen", punten: 4.94, tarief: 37.51, eenheid: "per set" },
    { code: "C014", omschrijving: "Pocketregistratie (DPSI)", punten: 5.93, tarief: 45.01, eenheid: "per registratie" },
    { code: "C022", omschrijving: "Droogleggen elementen (rubberdam)", punten: 1.98, tarief: 15.00, eenheid: "per behandeling" },
    
    // ===== X: RÖNTGENFOTO'S =====
    { code: "X10", omschrijving: "Kleine röntgenfoto maken en beoordelen", punten: 2.77, tarief: 21.00, eenheid: "per opname" },
    { code: "X11", omschrijving: "Beoordelen kleine röntgenfoto", punten: 2.07, tarief: 15.75, eenheid: "per opname" },
    { code: "X21", omschrijving: "Kaakoverzichtsfoto (OPT) maken en beoordelen", punten: 11.87, tarief: 90.02, eenheid: "per opname" },
    { code: "X22", omschrijving: "Kaakoverzichtsfoto voor implantologie", punten: 11.87, tarief: 90.02, eenheid: "per opname" },
    { code: "X24", omschrijving: "Schedelprofielfoto (cephalogram)", punten: 8.90, tarief: 67.52, eenheid: "per opname" },
    { code: "X25", omschrijving: "Meerdimensionale kaakfoto (CBCT)", punten: 33.98, tarief: 257.94, eenheid: "per opname" },
    
    // ===== M: PREVENTIE & MONDHYGIËNE =====
    { code: "M01", omschrijving: "Preventieve voorlichting en/of instructie", punten: 2.22, tarief: 16.82, eenheid: "per 5 minuten" },
    { code: "M02", omschrijving: "Consult evaluatie van preventie", punten: 2.22, tarief: 16.82, eenheid: "per 5 minuten" },
    { code: "M03", omschrijving: "Gebitsreiniging", punten: 2.22, tarief: 16.82, eenheid: "per 5 minuten" },
    { code: "M05", omschrijving: "Behandeling overgevoelige tandhalzen", punten: 2.22, tarief: 16.82, eenheid: "per 5 minuten" },
    { code: "M32", omschrijving: "Sealen eerste blijvende molaar", punten: 4.94, tarief: 37.51, eenheid: "per element" },
    { code: "M40", omschrijving: "Fluoridebehandeling", punten: 2.47, tarief: 18.76, eenheid: "per kaak" },
    
    // ===== A: VERDOVING =====
    { code: "A10", omschrijving: "Geleidings-/infiltratieverdoving", punten: 2.47, tarief: 18.76, eenheid: "per toepassing" },
    { code: "A15", omschrijving: "Oppervlakte-anesthesie (spray/gel)", punten: 1.24, tarief: 9.38, eenheid: "per toepassing" },
    { code: "A20", omschrijving: "Lachgassedatie", punten: 9.88, tarief: 75.02, eenheid: "per behandeling" },
    
    // ===== V: VULLINGEN =====
    { code: "V11", omschrijving: "Eénvlaksvulling amalgaam", punten: 5.93, tarief: 45.01, eenheid: "per vulling" },
    { code: "V12", omschrijving: "Tweevlaksvulling amalgaam", punten: 7.91, tarief: 60.01, eenheid: "per vulling" },
    { code: "V13", omschrijving: "Drievlaksvulling amalgaam", punten: 9.88, tarief: 75.02, eenheid: "per vulling" },
    { code: "V91", omschrijving: "Eénvlaksvulling composiet", punten: 7.91, tarief: 60.01, eenheid: "per vulling" },
    { code: "V92", omschrijving: "Tweevlaksvulling composiet", punten: 10.38, tarief: 78.77, eenheid: "per vulling" },
    { code: "V93", omschrijving: "Drievlaksvulling composiet", punten: 12.36, tarief: 93.77, eenheid: "per vulling" },
    { code: "V94", omschrijving: "Meervlaksvulling composiet", punten: 15.82, tarief: 120.02, eenheid: "per vulling" },
    { code: "V70", omschrijving: "Kroonopbouw met stift", punten: 14.83, tarief: 112.52, eenheid: "per element" },
    
    // ===== E: ENDODONTIE (Wortelkanaalbehandeling) =====
    { code: "E01", omschrijving: "Wortelkanaalbehandeling eenwortelkanaalig", punten: 19.77, tarief: 150.03, eenheid: "per element" },
    { code: "E02", omschrijving: "Wortelkanaalbehandeling meerwortelkanaalig", punten: 34.60, tarief: 262.55, eenheid: "per element" },
    { code: "E04", omschrijving: "Pulpa-extirpatie", punten: 9.88, tarief: 75.02, eenheid: "per element" },
    { code: "E13", omschrijving: "Directe pulpa-overkapping", punten: 4.94, tarief: 37.51, eenheid: "per element" },
    { code: "E40", omschrijving: "Spoedbehandeling endodontie", punten: 9.88, tarief: 75.02, eenheid: "per behandeling" },
    
    // ===== H: EXTRACTIES & CHIRURGIE =====
    { code: "H11", omschrijving: "Trekken tand of kies", punten: 7.91, tarief: 60.01, eenheid: "per element" },
    { code: "H16", omschrijving: "Trekken wortelrest", punten: 7.91, tarief: 60.01, eenheid: "per element" },
    { code: "H21", omschrijving: "Moeilijke extractie", punten: 14.83, tarief: 112.52, eenheid: "per element" },
    { code: "H35", omschrijving: "Verwijderen verstandskies (chirurgisch)", punten: 24.71, tarief: 187.53, eenheid: "per element" },
    { code: "H50", omschrijving: "Wondtoilet/hechten", punten: 7.41, tarief: 56.26, eenheid: "per behandeling" },
    
    // ===== R: KRONEN & BRUGGEN =====
    { code: "R08", omschrijving: "Tijdelijke kroon (labgemaakt)", punten: 24.71, tarief: 187.53, eenheid: "per element" },
    { code: "R24", omschrijving: "Metaal-porseleinen kroon", punten: 49.42, tarief: 375.05, eenheid: "per element" },
    { code: "R29", omschrijving: "Volledige porseleinen kroon", punten: 54.36, tarief: 412.56, eenheid: "per element" },
    { code: "R31", omschrijving: "Kroon op implantaat", punten: 54.36, tarief: 412.56, eenheid: "per element" },
    { code: "R40", omschrijving: "Brugdeel (tussenlid)", punten: 39.54, tarief: 300.04, eenheid: "per element" },
    { code: "R60", omschrijving: "Opnieuw vastzetten kroon/brug", punten: 4.94, tarief: 37.51, eenheid: "per element" },
    
    // ===== P: PROTHESE =====
    { code: "P01", omschrijving: "Volledige bovenprothese", punten: 98.84, tarief: 750.10, eenheid: "per prothese" },
    { code: "P02", omschrijving: "Volledige onderprothese", punten: 98.84, tarief: 750.10, eenheid: "per prothese" },
    { code: "P10", omschrijving: "Gedeeltelijke prothese 1-4 elementen", punten: 74.13, tarief: 562.57, eenheid: "per prothese" },
    { code: "P15", omschrijving: "Frame prothese", punten: 123.55, tarief: 937.62, eenheid: "per prothese" },
    { code: "P30", omschrijving: "Rebasen prothese", punten: 24.71, tarief: 187.53, eenheid: "per prothese" },
    { code: "P35", omschrijving: "Reparatie prothese", punten: 14.83, tarief: 112.52, eenheid: "per prothese" },
    
    // ===== J: IMPLANTOLOGIE =====
    { code: "J01", omschrijving: "Vooronderzoek implantaat", punten: 19.77, tarief: 150.03, eenheid: "per kaak" },
    { code: "J07", omschrijving: "Chirurgische plaatsing implantaat", punten: 98.84, tarief: 750.10, eenheid: "per implantaat" },
    { code: "J09", omschrijving: "Vrijleggen implantaat", punten: 24.71, tarief: 187.53, eenheid: "per implantaat" },
    { code: "J20", omschrijving: "Plaatsen healing abutment", punten: 14.83, tarief: 112.52, eenheid: "per implantaat" },
    { code: "J23", omschrijving: "Mesostructuur op implantaat", punten: 54.36, tarief: 412.56, eenheid: "per implantaat" },
    
    // ===== T: ORTHODONTIE =====
    { code: "T01", omschrijving: "Orthodontisch consult", punten: 7.51, tarief: 57.01, eenheid: "per consult" },
    { code: "T33", omschrijving: "Beugelconsult/controle", punten: 4.94, tarief: 37.51, eenheid: "per consult" },
    { code: "T70", omschrijving: "Plaatsen vaste retainer", punten: 19.77, tarief: 150.03, eenheid: "per kaak" },
    { code: "T72", omschrijving: "Verwijderen vaste retainer", punten: 9.88, tarief: 75.02, eenheid: "per kaak" },
    { code: "T90", omschrijving: "Reparatie beugel", punten: 9.88, tarief: 75.02, eenheid: "per behandeling" },
  ];

  const getCategory = (code) => {
    const prefix = code.slice(0, 1).toUpperCase();
    switch (prefix) {
      case "A":
        return { key: "verdoving", label: "A - Verdoving" };
      case "C":
        return { key: "consult", label: "C - Consultatie & diagnostiek" };
      case "E":
        return { key: "endodontie", label: "E - Endodontie" };
      case "H":
        return { key: "extracties", label: "H - Extracties & chirurgie" };
      case "J":
        return { key: "implantologie", label: "J - Implantologie" };
      case "M":
        return { key: "preventie", label: "M - Preventie & mondhygiëne" };
      case "P":
        return { key: "prothese", label: "P - Prothese" };
      case "R":
        return { key: "kronen", label: "R - Kronen & bruggen" };
      case "T":
        return { key: "orthodontie", label: "T - Orthodontie" };
      case "V":
        return { key: "vullingen", label: "V - Vullingen" };
      case "X":
        return { key: "foto", label: "X - Röntgenfoto's" };
      default:
        return { key: "overig", label: "Overig" };
    }
  };

  const els = {
    search: document.querySelector("[data-tarieven-search]"),
    category: document.querySelector("[data-tarieven-category]"),
    body: document.querySelector("[data-tarieven-tbody]"),
    empty: document.querySelector("[data-tarieven-empty]"),
    count: document.querySelector("[data-tarieven-count]"),
  };

  if (!els.body) return; // only on tarieven page

  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .trim();

  const matches = (item, q) => {
    if (!q) return true;
    const hay = normalize(`${item.code} ${item.omschrijving} ${item.eenheid}`);
    return hay.includes(q);
  };

  const render = () => {
    const q = normalize(els.search?.value);
    const cat = els.category?.value || "all";

    const filtered = KNMT_TARIEVEN_2026.filter((it) => {
      const c = getCategory(it.code).key;
      if (cat !== "all" && c !== cat) return false;
      return matches(it, q);
    });

    els.body.innerHTML = filtered
      .map((it) => {
        const catInfo = getCategory(it.code);
        const points =
          typeof it.punten === "number"
            ? it.punten.toString().replace(".", ",")
            : "";
        return `
          <tr data-category="${catInfo.key}">
            <td class="tarieven__code" data-label="Code">
              <span class="tarieven__code-pill">${it.code}</span>
              <span class="tarieven__cat">${catInfo.label}</span>
            </td>
            <td class="tarieven__desc" data-label="Omschrijving">${it.omschrijving}</td>
            <td class="tarieven__unit" data-label="Eenheid">${it.eenheid}</td>
            <td class="tarieven__points" data-label="Punten">${points}</td>
            <td class="tarieven__price" data-label="Tarief">${euro.format(it.tarief)}</td>
          </tr>
        `;
      })
      .join("");

    const has = filtered.length > 0;
    if (els.empty) els.empty.style.display = has ? "none" : "block";
    if (els.count)
      els.count.textContent = filtered.length === 1 
        ? `${filtered.length} resultaat`
        : `${filtered.length} resultaten`;
  };

  els.search?.addEventListener("input", render);
  els.category?.addEventListener("change", render);

  // initial render
  render();

  // Small UX: show keyboard focus ring nicely (only when tabbing)
  // (relies on CSS that uses [data-focus-visible] attribute)
  let keyboard = false;
  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (!keyboard) root.setAttribute("data-focus-visible", "true");
      keyboard = true;
    }
  });
  window.addEventListener("mousedown", () => {
    if (keyboard) root.removeAttribute("data-focus-visible");
    keyboard = false;
  });
})();


