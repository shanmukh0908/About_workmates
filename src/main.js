
async function loadSection(id, file) {
  const res = await fetch(`/sections/${file}`);
  document.getElementById(id).innerHTML = await res.text();
}

loadSection("overview", "projectoverview.html");
loadSection("eng_decisions", "eng_decisions.html")
loadSection("eng_decisions_backend", "eng_decisions_backend.html")
loadSection("frontend_techstack", "frontend_techstack.html")
loadSection("backend_techstack", "backend_techstack.html")
loadSection("frontend_folder_tree", "frontend_folder_tree.html")
loadSection("backend_folder_tree", "backend_folder_tree.html")
loadSection("screenshots", "screenshots.html")
loadSection("header", "header.html")
loadSection("deployment_section", "deployment.html")


// loadSection("header", "header.html");
// loadSection("screenshots", "screenshots.html");
// loadSection("architecture", "architecture.html");
// loadSection("folderTree", "folder-tree.html");
// loadSection("links", "links.html");