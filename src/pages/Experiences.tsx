import { useEffect, useRef, useState } from "react";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { experienceCategories } from "@/data/experiences";

function Experiences() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof experienceCategories)[number]["slug"] | "all"
  >("all");
  const categoryWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const widgetUrls: Partial<Record<typeof activeCategory, string>> = {
      all:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1113039%2C1018926%2C993053%2C1091593%2C1055096%2C1113561%2C1024541%2C1020312%2C1123855%2C1094266%2C1119519%2C1054749%2C983517%2C1101222%2C1035180%2C1094495%2C1091620%2C1091862%2C1059768%2C1033997%2C1013451%2C1025947%2C975618%2C1032480%2C975455%2C1094112%2C1024579%2C1028026%2C1070299%2C1102940%2C1124299%2C1017376%2C1034605%2C975648%2C1007609%2C1095489%2C975362%2C1087081%2C974800%2C1111518%2C1095496%2C1129660%2C1081774%2C1039204%2C1090849%2C1052050%2C1113640%2C1035437%2C1028740%2C1117124%2C1107093%2C1038172%2C1104769%2C1114527%2C1118824%2C1056105%2C1102050%2C1040707%2C1097479%2C1126920%2C1091669%2C992525%2C1121267%2C1115311%2C1115769%2C1116249%2C1115310%2C1136788%2C1110665%2C1119083%2C1008200%2C1120813%2C975985%2C1117051%2C974507%2C974715%2C1116729%2C1111561%2C1089436%2C996353%2C1120100%2C1091712%2C1091611%2C1117703%2C1118032%2C976402%2C1092926%2C1135849%2C1132445%2C1040008%2C975469%2C1036989%2C980711%2C980053%2C1118329%2C1013364%2C1091620%2C1055901%2C975468%2C1121154%2C1106011%2C1091587%2C1120980%2C1118035%2C1086491%2C1064470%2C1120691%2C1083404%2C1085392%2C1116112%2C989060%2C975062%2C977359%2C1036103%2C974267%2C976069%2C1012497%2C1015238%2C1095488%2C1013950%2C978153%2C1084610%2C1068222%2C1071799%2C976207%2C1059039%2C977806%2C703295%2C975155%2C978576%2C977711%2C975144%2C974071%2C1033998%2C974502%2C977880%2C974427%2C975453%2C975904%2C976058%2C1111456%2C1119441%2C1078479%2C1121541%2C1011636%2C1100695%2C1100389%2C1054255%2C1102719%2C977218%2C1114880%2C1115768%2C1128460%2C1073227%2C1093616%2C1083441%2C1118285%2C1089189%2C1028433%2C1118668%2C1097461%2C1003349%2C1094267%2C1042726%2C1065661%2C975218%2C982295%2C1136647%2C974576%2C1099156%2C1111529%2C974376%2C978274%2C1126688%2C1122616%2C1132514%2C978273%2C1078479%2C1116731%2C988004%2C1019882%2C1019850%2C1124253%2C1084617%2C1128464%2C982494%2C989951%2C975409%2C977226%2C1012325%2C1119570%2C975113%2C1017409%2C1013480%2C974688%2C992362%2C1090399%2C1010878%2C983153%2C1010876%2C974871%2C992330%2C1102937&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      beach:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1113039%2C1018926%2C993053%2C1091593%2C1055096%2C1113561%2C1024541%2C1020312%2C1123855%2C1094266%2C1119519%2C1054749%2C983517%2C1101222%2C1035180%2C1094495%2C1091620%2C1091862%2C1059768%2C1033997&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      adventure:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1013451%2C1025947%2C975618%2C1032480%2C975455%2C1094112%2C1024579%2C1028026%2C1070299%2C1102940%2C1124299%2C1017376%2C1034605%2C975648%2C1007609%2C1095489%2C975362%2C1087081%2C974800%2C1111518&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      food:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1095496%2C1129660%2C1081774%2C1039204%2C1090849%2C1052050%2C1113640%2C1035437%2C1028740%2C1117124%2C1107093%2C1038172%2C1104769%2C1114527%2C1118824%2C1056105%2C1102050%2C1040707%2C1097479%2C1126920%2C1091669&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      culture:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=992525%2C1121267%2C1115311%2C1115769%2C1116249%2C1115310%2C1136788&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      nature:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1110665%2C1119083%2C1008200%2C1120813%2C975985%2C1117051%2C974507%2C974715%2C1116729%2C1111561%2C1089436%2C996353%2C1120100%2C1091712%2C1091611%2C1117703%2C1118032%2C976402%2C1092926%2C1135849&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      wildlife:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1132445%2C1040008%2C975469%2C1036989%2C980711%2C980053%2C1118329%2C1013364%2C1091620%2C1055901%2C975468%2C1121154%2C1106011%2C1091587%2C1120980%2C1118035%2C1086491%2C1064470%2C1120691%2C1083404%2C1085392%2C1116112%2C989060&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      city:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=975062%2C977359%2C1036103%2C974267%2C976069%2C1012497%2C1015238%2C1095488%2C1013950%2C978153%2C1084610%2C1068222%2C1071799%2C976207%2C1059039&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      family:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=977806%2C703295%2C975155%2C978576%2C977711%2C975144%2C974071%2C1033998%2C974502%2C977880%2C974427%2C975453%2C975904%2C976058%2C1015889&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      luxury:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1111456%2C1119441%2C1078479%2C1121541%2C1011636%2C1100695%2C1100389%2C1054255%2C1102719%2C977218%2C1114880%2C1115768%2C1128460%2C1073227%2C1093616&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      nightlife:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1083441%2C1118285%2C1089189%2C1028433%2C1118668%2C1097461%2C1003349%2C1094267%2C1042726%2C1065661%2C1065661%2C975218%2C975218%2C982295%2C1136647&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      wellness:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=974576%2C1099156%2C1111529%2C974376%2C978274%2C1126688%2C1122616%2C1132514%2C978273%2C1078479%2C1116731%2C988004%2C1019882%2C1019850%2C1124253&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
      sports:
        "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1084617%2C1128464%2C982494%2C989951%2C975409%2C977226%2C1012325%2C1119570%2C975113%2C1017409%2C1013480%2C974688%2C992362%2C1090399%2C1010878%2C983153%2C1010876%2C974871%2C992330%2C1102937&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948",
    };
    const widgetUrl = widgetUrls[activeCategory];
    if (!widgetUrl) return;

    const container = categoryWidgetRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.src =
      widgetUrl;
    script.charset = "utf-8";
    container.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Experiences"
        description="Discover curated travel experiences across the globe — adventure, culture, food, wellness, and more."
        canonical={`https://${brandConfig.domain}/experiences`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">Experiences</h1>
          <p className="text-lead mt-4">
            Curated experiences for every travel style.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeCategory === "all"
                    ? "bg-accent text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {experienceCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    activeCategory === cat.slug
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div ref={categoryWidgetRef} className="destination-widget-mount" />
        </div>
      </section>
    </>
  );
}

export default Experiences;
