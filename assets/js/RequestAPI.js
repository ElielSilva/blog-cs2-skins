window.arrayWaponPistol = []
window.arrayWaponRifle = []
window.arrayWaponSuperRifle = []
window.arrayWaponKnife = []
window.arrayGloves = []
window.arrayMachineGun = []
window.arraySmg = []
window.arrayShotgun = []
window.arrayEquipment = []
window.firstElements = []
window.arraySkins = []


const request = async () => {
  const result = await fetch("https://spacerulerwill.github.io/CS2-API/api/skins.json")
  const json = await result.json()
  window.arraySkins = Object.values(json)
  return json
}

async function SeparateSkins() {
  const data = await request();

  for (const iterator of Object.values(data)) {
    switch (iterator.weapon_type) {
      case 'rifle':
        if (arrayWaponRifle.length === 0)
          firstElements.push(iterator)
        arrayWaponRifle.push(iterator)
        break;
      case 'pistol':
        if (arrayWaponPistol.length == 0)
          firstElements.push(iterator)
        arrayWaponPistol.push(iterator)
        break;
      case 'knife':
        if (arrayWaponKnife.length == 0)
          firstElements.push(iterator)
        arrayWaponKnife.push(iterator)
        break;
      case "sniper rifle":
        if (arrayWaponSuperRifle.length == 0)
          firstElements.push(iterator)
        arrayWaponSuperRifle.push(iterator)
        break;
      case "shotgun":
        if (arrayShotgun.length == 0)
          firstElements.push(iterator)
        arrayShotgun.push(iterator)
        break;
      case "smg":
        if (arraySmg.length == 0)
          firstElements.push(iterator)
        arraySmg.push(iterator)
          break;
      case "gloves":
        if (arrayGloves.length == 0)
          firstElements.push(iterator)
        arrayGloves.push(iterator)
        break;
      case 'machine gun':
        if (arrayMachineGun.length == 0)
          firstElements.push(iterator)
        arrayMachineGun.push(iterator)
        break;
      
      case 'equipment':
        if (arrayEquipment.lentgh == 0)
          firstElements.push(iterator)
        arrayEquipment.push(iterator)
        break;
      default:
        break;
    }
  }
}

window.onload(
  SeparateSkins()
)

