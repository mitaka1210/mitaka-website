import i18n from "../../i18n";

export const translateWebsite = (data) => {
  const langMethod = () => {
    if (data.title === "Bulgarian" || data.title === "Български") {
      i18n.changeLanguage("bg").then(r => {
      });
      // window.location.reload();
    } else if (data.title === "English" || data.title === "Английски") {
      i18n.changeLanguage("en").then(r => {
      });
    }
  };
  return langMethod();
};
