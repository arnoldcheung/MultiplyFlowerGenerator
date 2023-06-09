// Dictionary of translations
const translations = {
    en: {
        language: "中",
        nameInputDefaultInstruction: "Your Signature (Optional)",
        messageInputDefaultInstruction: "Your Message (Optional) ",
        fontInstruction: "Font",
        generateInstruction: "Generate your unique artwork",
        goInstruction: "Go",
        eightDigitInstruction: "Enter your 8 digit code",
        manualInstruction: "Or create your universe manually",
        nextElementInstruction: "Next",
        colorInstruction: "Choose the color of elements",
        startStopInstruction: "Press start to generate your artwork",
        startInstruction: "Start",
        stopInstruction: "Pause",
        sizeInstruction: "Current size : ",
        hideControlInstruction: "Hide Control",
        showControlInstruction: "Show Control",
        captureInstruction: "Capture",
        resetInstruction: "Reset",
        adjustSliderInstruction: '⬅ Adjust the composition ⮕',
        exhibitionTitle: " Generative Art by Multiply Studio & Technologies Limited - IG : @multiply.tech",

        colorNameList: [
            'Flower',  
            'Background',
            'Font'],

        elementList: [
            'Size',
            'Chaos',
            'Energy'],
    },



    zh: {
        language: "en",
        nameInputDefaultInstruction: "您的簽名（可選）",
        messageInputDefaultInstruction: "您的留言（可選）",
        fontInstruction: "字體",
        generateInstruction: "生成您獨特的藝術品",
        goInstruction: "生成",
        eightDigitInstruction: "輸入您的8位代碼",
        manualInstruction: "或手動創建您的宇宙",
        nextElementInstruction: "換元素",
        colorInstruction: "選擇元素的顏色",
        startStopInstruction: "按一下開始生成你的藝術品",
        startInstruction: "開始",
        stopInstruction: "暫停",
        sizeInstruction: "現在大小 : ",
        hideControlInstruction: "隱藏控制",
        showControlInstruction: "顯示控制",
        captureInstruction: "截圖",
        resetInstruction: "重置",
        adjustSliderInstruction: '⬅調整構圖⮕',
        exhibitionTitle: " Generative Art by Multiply Studio & Technologies Limited - IG : @multiply.tech",

        colorNameList: [
          '花',
          '背景',
          '字體'],

      elementList: [
          '大小',
          '混沌',
          '能量'],
    },
  };
  
let currentLanguage = "en";

  // Function to get the translated text based on the current language
function getTranslation(key) {
    return translations[currentLanguage][key];
  }
  
  // Function to toggle the language and re-render the text
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "zh" : "en";
    // console.log(currentLanguage)
    resetUniverse(); // Re-render the sketch with the updated language
  }