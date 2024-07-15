const arrayWaponPistol = []
const arrayWaponRifle = []
const arrayWaponSuperRifle = []
const arrayWaponKnife = []
const arrayGloves = []
const arrayMachineGun = []
const arraySmg = []
const arrayShotgun = []
const arrayEquipment = []


const request = async () => {
  const result = await fetch("https://spacerulerwill.github.io/CS2-API/api/skins.json")
  const json = await result.json()
  return json
}

async function SeparateSkins() {
  const a = await request();
  
  for (const iterator of Object.values(a)) {
    switch (iterator.weapon_type) {
      case 'rifle':
        arrayWaponRifle.push(iterator)
        break;
      case 'pistol':
        arrayWaponPistol.push(iterator)
        break;
      case 'knife':
        arrayWaponKnife.push(iterator)
        break;
      case "sniper rifle":
        arrayWaponSuperRifle.push(iterator)
        break;
      case "shotgun":
        arrayShotgun.push(iterator)
        break;
      case "smg":
        arraySmg.push(iterator)
          break;
      case "gloves":
        arrayGloves.push(iterator)
        break;
      case 'machine gun':
        arrayMachineGun.push(iterator)
        break;
      
      case 'equipment':
        arrayEquipment.push(iterator)
        break;
      default:
        break;
    }
  }

  
  //console.log(arrayWaponRifle[0]);
  //console.log(arrayEquipment[0], arrayGloves[0]);
  //console.log(Object.keys(a));
}SeparateSkins()
