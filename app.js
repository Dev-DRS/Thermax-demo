const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')


const modelViewer = document.querySelector('#hotspot-camera-view-demo');
const infoBox = document.getElementById('info-box');
const infoText = document.getElementById('info-text');
const hotspotButton = document.querySelector('[slot="hotspot-0"]');


function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  // if(!button.nextElementSibling.classList.contains('show')){
  //   closeAllSubMenus()
  // }

  // button.nextElementSibling.classList.toggle('show')
  // button.classList.toggle('rotate')

  // if(sidebar.classList.contains('close')){
  //   sidebar.classList.toggle('close')
  //   toggleButton.classList.toggle('rotate')
  // }
  const parentSubMenu = button.closest('ul.sub-menu');

  // Close only submenus that are not in the current hierarchy
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    if (!parentSubMenu || !parentSubMenu.contains(ul)) {
      ul.classList.remove('show');
      ul.previousElementSibling.classList.remove('rotate');
    }
  });

  // Toggle the clicked menu
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

  // Open sidebar if it's closed
  if (sidebar.classList.contains('close')) {
    sidebar.classList.remove('close');
    toggleButton.classList.toggle('rotate');
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}
function LoadModelViewer(){
 print("neil") ;
}
function toggleInfoPanel() {
  const infoPanel = document.getElementById('info-panel');
  const infoPanel2 = document.getElementById('info-panel_2');
  const infoPanel3 = document.getElementById('info-panel_3');
  infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
  infoPanel2.style.display='none';
  infoPanel3.style.display='none';

}
function toggleInfoPanel_2() {
const infoPanel3 = document.getElementById('info-panel_3');
const infoPanel1 = document.getElementById('info-panel');
  const infoPanel = document.getElementById('info-panel_2');
  infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
  infoPanel1.style.display='none';
  infoPanel3.style.display='none';
}
function toggleInfoPanel_3() {
const infoPanel2 = document.getElementById('info-panel_2');
const infoPanel1 = document.getElementById('info-panel');
  const infoPanel = document.getElementById('info-panel_3');
  infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
  infoPanel1.style.display='none';
  infoPanel2.style.display='none';
}
function toggleInfoPanel_4() {
  const infoPanel2 = document.getElementById('info-panel_6');
  const infoPanel1 = document.getElementById('info-panel_5');
    const infoPanel = document.getElementById('info-panel_4');
    infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
    infoPanel1.style.display='none';
    infoPanel2.style.display='none';
}
function toggleInfoPanel_5() {
  const infoPanel2 = document.getElementById('info-panel_6');
  const infoPanel1 = document.getElementById('info-panel_4');
    const infoPanel = document.getElementById('info-panel_5');
    infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
    infoPanel1.style.display='none';
    infoPanel2.style.display='none';
}

function toggleInfoPanel_6() {
  const infoPanel2 = document.getElementById('info-panel_5');
  const infoPanel1 = document.getElementById('info-panel_4');
    const infoPanel = document.getElementById('info-panel_6');
    infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
    infoPanel1.style.display='none';
    infoPanel2.style.display='none';
}

function toggleInfoPanel_7() {
  const infoPanel2 = document.getElementById('info-panel_9');
  const infoPanel1 = document.getElementById('info-panel_8');
    const infoPanel = document.getElementById('info-panel_7');
    infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
    infoPanel1.style.display='none';
    infoPanel2.style.display='none';
}
function toggleInfoPanel_8() {
  const infoPanel2 = document.getElementById('info-panel_9');
  const infoPanel1 = document.getElementById('info-panel_7');
    const infoPanel = document.getElementById('info-panel_8');
    infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
    infoPanel1.style.display='none';
    infoPanel2.style.display='none';
}
function toggleInfoPanel_9() {
  const infoPanel2 = document.getElementById('info-panel_7');
  const infoPanel1 = document.getElementById('info-panel_8');
    const infoPanel = document.getElementById('info-panel_9');
    infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';
    infoPanel1.style.display='none';
    infoPanel2.style.display='none';
}