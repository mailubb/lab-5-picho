import { EmojiCharacter } from "../types/cake"; 


class Emojis {
  get(): EmojiCharacter[] {
    return [
      {
        topimage: "https://www.pngkey.com/png/full/159-1596090_hat-baseball-cap-emoji-png.png",
        midimage: "https://emojiisland.com/cdn/shop/products/Flushed_Emoji_Icon_5e6ce936-4add-472b-96ba-9082998adcf7_large.png?v=1571606089",
        bottomimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emoji_u1f64f.svg/1200px-Emoji_u1f64f.svg.png"
      },

      {
        topimage: "https://www.pngkey.com/png/full/159-1596090_hat-baseball-cap-emoji-png.png",
        midimage: "https://assets.stickpng.com/images/5a24123c6003f508dd5d5b39.png",
        bottomimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emoji_u1f64f.svg/1200px-Emoji_u1f64f.svg.png"
      },

      {
        topimage: "https://www.pngkey.com/png/full/159-1596090_hat-baseball-cap-emoji-png.png",
        midimage: "https://assets.stickpng.com/images/5a24123c6003f508dd5d5b39.png",
        bottomimage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emoji_u1f64f.svg/1200px-Emoji_u1f64f.svg.png"
      }
    ];
  }
}

console.log(Emojis)

export default Emojis;