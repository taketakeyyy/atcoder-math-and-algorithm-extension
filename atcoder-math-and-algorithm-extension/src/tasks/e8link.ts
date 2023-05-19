const ce = require("../consts/editorial");

/**
 * 各ページ固有のリンクを追加する
 */
const append_individual_links = async (dropdown_menu_ul: HTMLUListElement) => {
    const pathnames: string[] = location.pathname.split("/");
    let problem_name: string = pathnames[pathnames.length - 1];
    if (problem_name === "") {
        problem_name = pathnames[pathnames.length - 2];
    }

    if (ce.EDITORIAL_LINK_DICT[problem_name] == null) return;

    // Editorial
    const e_base_url: string = "https://github.com/E869120/math-algorithm-book/blob/main/editorial/";
    for (const value of ce.EDITORIAL_LINK_DICT[problem_name]) {
        const ul_li: HTMLLIElement = document.createElement("li");
        const ul_li_a: HTMLAnchorElement = document.createElement("a");
        ul_li_a.text = "Editorial: " + value;
        ul_li_a.setAttribute("href", e_base_url + value);
        ul_li_a.setAttribute("target", "_blank");
        ul_li_a.setAttribute("rel", "noopener noreferrer");
        ul_li.appendChild(ul_li_a);
        dropdown_menu_ul.appendChild(ul_li);
    }

    const e_divider: HTMLLIElement = document.createElement("li");
    e_divider.setAttribute("class", "divider");
    dropdown_menu_ul.appendChild(e_divider);
};

/**
 * 共通のリンクを追加する
 */
const append_common_links = async (dropdown_menu_ul: HTMLUListElement) => {
    const dropdown_menu_ul_li1: HTMLLIElement = document.createElement("li");
    const dropdown_menu_ul_li1_a: HTMLAnchorElement = document.createElement("a");
    dropdown_menu_ul_li1_a.text = "Editorial List";
    dropdown_menu_ul_li1_a.setAttribute("href", "https://github.com/E869120/math-algorithm-book/tree/main/editorial");
    dropdown_menu_ul_li1_a.setAttribute("target", "_blank");
    dropdown_menu_ul_li1_a.setAttribute("rel", "noopener noreferrer");

    const dropdown_menu_ul_li2: HTMLLIElement = document.createElement("li");
    const dropdown_menu_ul_li2_a: HTMLAnchorElement = document.createElement("a");
    dropdown_menu_ul_li2_a.text = "Errata"
    dropdown_menu_ul_li2_a.setAttribute("href", "https://github.com/E869120/math-algorithm-book/blob/main/errata.md");
    dropdown_menu_ul_li2_a.setAttribute("target", "_blank");
    dropdown_menu_ul_li2_a.setAttribute("rel", "noopener noreferrer");

    const dropdown_menu_ul_li3: HTMLLIElement = document.createElement("li");
    const dropdown_menu_ul_li3_a: HTMLAnchorElement = document.createElement("a");
    dropdown_menu_ul_li3_a.text = "Repository"
    dropdown_menu_ul_li3_a.setAttribute("href", "https://github.com/E869120/math-algorithm-book");
    dropdown_menu_ul_li3_a.setAttribute("target", "_blank");
    dropdown_menu_ul_li3_a.setAttribute("rel", "noopener noreferrer");

    dropdown_menu_ul_li1.appendChild(dropdown_menu_ul_li1_a);
    dropdown_menu_ul_li2.appendChild(dropdown_menu_ul_li2_a);
    dropdown_menu_ul_li3.appendChild(dropdown_menu_ul_li3_a);

    dropdown_menu_ul.appendChild(dropdown_menu_ul_li1);
    dropdown_menu_ul.appendChild(dropdown_menu_ul_li2);
    dropdown_menu_ul.appendChild(dropdown_menu_ul_li3);
};

export const run = async () => {
    // 必要なDOMが存在するか確認する
    const content_nav_tabs: HTMLElement | null = document.getElementById("contest-nav-tabs");
    if (content_nav_tabs == null) return;

    const nav_tabs_ulist: Element | null = content_nav_tabs.getElementsByClassName("nav nav-tabs")[0];
    if (nav_tabs_ulist == null) return;

    // E8's GitHub 要素を追加する
    const github_li: HTMLLIElement = document.createElement("li");
    const github_li_a: HTMLAnchorElement = document.createElement("a");
    github_li_a.setAttribute("class", "dropdown-toggle");
    github_li_a.setAttribute("data-toggle", "dropdown");
    github_li_a.setAttribute("href", "#");
    github_li_a.setAttribute("role", "button");
    github_li_a.setAttribute("aria-haspopup", "true");
    github_li_a.setAttribute("aria-expanded", "false");
    github_li_a.text = "E8's GitHub";

    const icon_span: HTMLSpanElement = document.createElement("span");
    icon_span.setAttribute("class", "glyphicon glyphicon-picture");
    icon_span.setAttribute("aria-hidden", "true");
    github_li_a.insertBefore(icon_span, github_li_a.firstChild);

    const caret_span: HTMLSpanElement = document.createElement("span");
    caret_span.setAttribute("class", "caret");
    github_li_a.appendChild(caret_span);

    const dropdown_menu_ul: HTMLUListElement = document.createElement("ul");
    dropdown_menu_ul.setAttribute("class", "dropdown-menu");

    append_individual_links(dropdown_menu_ul);
    append_common_links(dropdown_menu_ul);

    nav_tabs_ulist.appendChild(github_li);

    github_li.appendChild(github_li_a);
    github_li.appendChild(dropdown_menu_ul);
};
