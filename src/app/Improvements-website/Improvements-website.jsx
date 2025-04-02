import React, { useEffect, useState } from "react";
import "./Improvements-website.scss";
import { useTranslation } from "react-i18next";
import LoaderHTML from "../loader/LoaderHTML";

export default function ImprovementsWebsite() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <LoaderHTML />;
  }
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div>
          <main className="improvements morphing-bg">
            <br />
            <section>
              <div className="container-improvements ">
                <h2>{t("upcomingTasks")}</h2>
                <div className="update">
                  <span className="icon">⚡</span>
                  <span>{t("optimizePage")}</span>
                  <span className="status in-progress">{t("inProgress")}</span>
                </div>
                <div className="update">
                  <span className="icon">🎨</span>
                  <span>{t("addNewUI")}</span>
                  <span className="status completed">{t("complete")}</span>
                </div>
                <div className="update">
                  <span className="icon">🔍</span>
                  <span>{t("addSearch")}</span>
                  <span className="status pending">{t("inProgress")}</span>
                </div>
                <div className="update">
                  <span className="icon">👤</span>
                  <span>{t("createLoginPage")}</span>
                  <span className="status in-progress">{t("expected")}</span>
                </div>
                <div className="update">
                  <span className="icon">📝</span>
                  <span>{t("publishArticle")}</span>
                  <span className="status completed">{t("complete")}</span>
                </div>
                <div className="update">
                  <span className="icon">📩</span>
                  <span>{t("contactPageDone")}</span>
                  <span className="status completed">{t("completes")}</span>
                </div>
                <div className="update">
                  <span className="icon">💬</span>
                  <span>{t("addCommentSection")}</span>
                  <span className="status pending">{t("expected")}</span>
                </div>
                <div className="update">
                  <span className="icon">❤️</span>
                  <span>{t("addLikeIdslikeReation")}</span>
                  <span className="status completed">{t("complete")}</span>
                </div>
                <div className="update">
                  <span className="icon">💡</span>
                  <span>{t("manyMoreIdeas")}</span>
                  <span className="status pending">{t("expected")}</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
