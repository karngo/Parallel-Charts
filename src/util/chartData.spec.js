import { pageVisits, pageTitles, timeline, siteViews } from "./chartData";

describe("Chart Data Utils Test", () => {
  test("Page visits data should be equal to Page titles data", () => {
    expect(pageVisits.length).toEqual(pageTitles.length);
  });

  test("Timeline data should be equal to site views data", () => {
    expect(timeline.length).toEqual(siteViews.length);
  });

  test("timeline should be within 24hrs", () => {
    timeline.forEach((time) => {
      expect(time * 1).toBeLessThan(24);
      expect(time * 1).toBeGreaterThanOrEqual(0);
    });
  });
});
