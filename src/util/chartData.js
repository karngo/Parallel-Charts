import siteData from "../json/siteData.json";
import { groupBy } from "lodash";

const pageTitles = "ABCDEFGHIJ".split("");

const pageData = groupBy(siteData, ({ pageTitle }) => pageTitle);

const pageVisits = pageTitles.map((pageTitle) => {
  const users = pageData[pageTitle];
  if (!Array.isArray(users)) {
    return 0;
  }
  return users.length;
});

const viewsData = groupBy(siteData, ({ timeStamp }) => {
  const time = new Date(timeStamp);
  const hour = time.getHours();
  return `${hour}`;
});

const timeline = Object.keys(viewsData);
const siteViews = timeline.map((time) => viewsData[time].length);

export { pageVisits, pageTitles, timeline, siteViews };
