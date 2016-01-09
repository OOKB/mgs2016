const gradientImg = 'http://dbox.cape.io/7192159/cape/micagradshow/images/blend.jpg'
const baseSettings = '?w=300&h=300&fit=crop&crop=faces&sat=-100'
const activeSettings = `&bm=multiply&blend=${encodeURIComponent(gradientImg)}&balph=80&bs=inherit`

// Decide what image settings to use.
export default function photoDisplay(photo, active) {
  const stateSettings = active ? activeSettings : ''
  return {
    url: photo.url.href + baseSettings + stateSettings,
    height: 300,
    width: 300,
  }
}
