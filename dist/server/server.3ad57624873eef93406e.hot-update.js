;require('/Users/karwaipun/projects/hods-prototype/node_modules/source-map-support/source-map-support.js').install();
exports.id = "server";
exports.modules = {

/***/ "./src/common/pages/case-3.html":
/*!**************************************!*\
  !*** ./src/common/pages/case-3.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"\\n  <Fragment>\\n    <div class=\\\"govuk-width-container\\\">\\n  <a href=\\\"/list\\\" class=\\\"govuk-back-link\\\">Back to all applications</a>\\n\\n  <main class=\\\"govuk-main-wrapper\\\">\\n\\n    <div class=\\\"govuk-grid-row\\\">\\n      <div class=\\\"govuk-grid-column-two-thirds\\\">\\n        <span class=\\\"govuk-caption-l\\\">Application number</span>\\n        <h1 class=\\\"govuk-heading-l\\\">F2-90024</h1>\\n        <strong class=\\\"govuk-tag govuk-tag--blue\\\">\\n        new\\n        </strong>\\n\\n\\n                <table class=\\\"govuk-table\\\">\\n                  <thead class=\\\"govuk-table__head\\\">\\n                    <tr class=\\\"govuk-table__row\\\">\\n                      <th scope=\\\"col\\\" class=\\\"govuk-table__header\\\">\\n\\n                      </th>\\n                      <th scope=\\\"col\\\" class=\\\"govuk-table__header\\\">\\n\\n                      </th>\\n                    </tr>\\n                  </thead>\\n                  <tbody class=\\\"govuk-table__body\\\">\\n\\n                    <tr class=\\\"govuk-table__row\\\">\\n                      <th scope=\\\"row\\\" class=\\\"govuk-table__header\\\">\\n                        Owner's full name\\n                      </th>\\n                      <td class=\\\"govuk-table__cell\\\">\\n                        Max Gland\\n                      </td>\\n                    </tr>\\n                    <tr class=\\\"govuk-table__row\\\">\\n                      <th scope=\\\"row\\\" class=\\\"govuk-table__header\\\">\\n                        Cat's name\\n                      </th>\\n                      <td class=\\\"govuk-table__cell\\\">\\n                        Kikini\\n                      </td>\\n                    </tr>\\n                    <tr class=\\\"govuk-table__row\\\">\\n                      <th scope=\\\"row\\\" class=\\\"govuk-table__header\\\">\\n                        Species\\n                      </th>\\n                      <td class=\\\"govuk-table__cell\\\">Ocelot</td>\\n                    </tr>\\n                  </tbody>\\n                </table>\\n\\n<div id=\\\"search-filter-panel\\\" class=\\\"filter-panel\\\" aria-hidden=\\\"true\\\" style=\\\"background: #eee; clear: both; margin: 20px -10px 20px -15px; padding: 25px 15px;\\\">\\n                <div class=\\\"govuk-form-group\\\">\\n                  <fieldset class=\\\"govuk-fieldset\\\">\\n                    <legend class=\\\"govuk-fieldset__legend govuk-fieldset__legend--s\\\">\\n                      <h2 class=\\\"govuk-fieldset__heading\\\">\\n                        Overall decision\\n                      </h2>\\n                      <div id=\\\"with-hint-hint\\\" class=\\\"govuk-hint\\\">\\n                        What do you want to do with this application?\\n                      </div>\\n                    </legend>\\n                    <div class=\\\"govuk-radios govuk-radios--small\\\">\\n                      <div class=\\\"govuk-radios__item\\\">\\n                        <input class=\\\"govuk-radios__input\\\" id=\\\"changed-name\\\" name=\\\"changed-name\\\" type=\\\"radio\\\" value=\\\"month\\\">\\n                        <label class=\\\"govuk-label govuk-radios__label\\\" for=\\\"changed-name\\\">\\n                          Grant\\n                        </label>\\n                      </div>\\n                      <div class=\\\"govuk-radios__item\\\">\\n                        <input class=\\\"govuk-radios__input\\\" id=\\\"changed-name-2\\\" name=\\\"changed-name\\\" type=\\\"radio\\\" value=\\\"year\\\">\\n                        <label class=\\\"govuk-label govuk-radios__label\\\" for=\\\"changed-name-2\\\">\\n                          Refuse\\n                        </label>\\n                      </div>\\n                      <div class=\\\"govuk-radios__item\\\">\\n                        <input class=\\\"govuk-radios__input\\\" id=\\\"changed-name-3\\\" name=\\\"changed-name\\\" type=\\\"radio\\\" value=\\\"day\\\">\\n                        <label class=\\\"govuk-label govuk-radios__label\\\" for=\\\"changed-name-3\\\">\\n                          Put on hold\\n                        </label>\\n                      </div>\\n                    </div>\\n\\n                  </fieldset>\\n                </div>\\n\\n                <div class=\\\"govuk-character-count\\\" data-module=\\\"govuk-character-count\\\" data-maxlength=\\\"200\\\">\\n                  <div class=\\\"govuk-form-group\\\">\\n                    <h3 class=\\\"govuk-label-wrapper\\\"><label class=\\\"govuk-label govuk-label--s\\\" for=\\\"with-hint\\\">\\n                        Any other notes or concern\\n                      </label>\\n                    </h3>\\n                    <div id=\\\"with-hint-hint\\\" class=\\\"govuk-hint\\\">\\n                      Add any information to support your decision\\n                    </div>\\n                    <textarea class=\\\"govuk-textarea govuk-js-character-count\\\" id=\\\"with-hint\\\" name=\\\"with-hint\\\" rows=\\\"5\\\" aria-describedby=\\\"with-hint-info with-hint-hint\\\"></textarea>\\n                  </div>\\n\\n                  <div id=\\\"with-hint-info\\\" class=\\\"govuk-hint govuk-character-count__message\\\" aria-live=\\\"polite\\\">\\n                    You can enter up to 200 characters\\n                  </div>\\n\\n                </div>\\n\\n\\n            <form action=\\\"/hold\\\" class=\\\"not-govuk-form\\\" method=\\\"get\\\">\\n\\n          <input\\n            type=\\\"submit\\\"\\n            class=\\\"govuk-button\\\"\\n            value=\\\"Submit\\\"\\n          />\\n        </form>\\n\\n</div>\\n      </div>\\n      <!--  -->\\n<div class=\\\"govuk-grid-column-one-third\\\">\\n  <aside>\\n          <h2>Updates</h2>\\n          <p>Latest license information as of [Day] [Month] [Year]</p>\\n\\n          <details\\n  class=\\\"hods-status-banner hods-status-banner--negative\\\"\\n>\\n  <summary class=\\\"hods-status-banner__summary\\\">\\n    Expired\\n  </summary>\\n  <div class=\\\"hods-status-banner__text\\\">\\n    This licence has expired. The licence holder or applicant is authorised to wait until their licence/application has been renewed.\\n  </div>\\n</details>\\n        </aside>\\n\\n        <aside>\\n                <h2>Savannah information</h2>\\n                <p>The Savannah cat is the largest of the cat breeds. A Savannah cat is a cross between a domestic cat and a serval, a medium-sized, large-eared wild African cat. The unusual cross became popular among breeders at the end of the 1990s, and in 2001 The International Cat Association (TICA) accepted it as a new registered breed. In May 2012, TICA accepted it as a championship breed.</p>\\n<p><a href=\\\"https://en.wikipedia.org/wiki/Savannah_cat\\\" class=\\\"govuk-link\\\">More information</a></p>\\n\\n              </aside>\\n</div>\\n      <!--  -->\\n    </div>\\n\\n  </main>\\n</div>\\n\\n  </Fragment>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BhZ2VzL2Nhc2UtMy5odG1sPzgzNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw2aEVBQTZoRSxhQUFhLCtCQUErQixvQkFBb0I7QUFDN2xFO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tbW9uL3BhZ2VzL2Nhc2UtMy5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiXFxuICA8RnJhZ21lbnQ+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdvdnVrLXdpZHRoLWNvbnRhaW5lclxcXCI+XFxuICA8YSBocmVmPVxcXCIvbGlzdFxcXCIgY2xhc3M9XFxcImdvdnVrLWJhY2stbGlua1xcXCI+QmFjayB0byBhbGwgYXBwbGljYXRpb25zPC9hPlxcblxcbiAgPG1haW4gY2xhc3M9XFxcImdvdnVrLW1haW4td3JhcHBlclxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImdvdnVrLWdyaWQtcm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJnb3Z1ay1ncmlkLWNvbHVtbi10d28tdGhpcmRzXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnb3Z1ay1jYXB0aW9uLWxcXFwiPkFwcGxpY2F0aW9uIG51bWJlcjwvc3Bhbj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiZ292dWstaGVhZGluZy1sXFxcIj5GMi05MDAyNDwvaDE+XFxuICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJnb3Z1ay10YWcgZ292dWstdGFnLS1ibHVlXFxcIj5cXG4gICAgICAgIG5ld1xcbiAgICAgICAgPC9zdHJvbmc+XFxuXFxuXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiZ292dWstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cXFwiZ292dWstdGFibGVfX2hlYWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVxcXCJnb3Z1ay10YWJsZV9fcm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJjb2xcXFwiIGNsYXNzPVxcXCJnb3Z1ay10YWJsZV9faGVhZGVyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJjb2xcXFwiIGNsYXNzPVxcXCJnb3Z1ay10YWJsZV9faGVhZGVyXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XFxcImdvdnVrLXRhYmxlX19ib2R5XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwiZ292dWstdGFibGVfX3Jvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIiBjbGFzcz1cXFwiZ292dWstdGFibGVfX2hlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgT3duZXIncyBmdWxsIG5hbWVcXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJnb3Z1ay10YWJsZV9fY2VsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF4IEdsYW5kXFxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVxcXCJnb3Z1ay10YWJsZV9fcm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJyb3dcXFwiIGNsYXNzPVxcXCJnb3Z1ay10YWJsZV9faGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXQncyBuYW1lXFxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ292dWstdGFibGVfX2NlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEtpa2luaVxcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwiZ292dWstdGFibGVfX3Jvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIiBjbGFzcz1cXFwiZ292dWstdGFibGVfX2hlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgU3BlY2llc1xcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImdvdnVrLXRhYmxlX19jZWxsXFxcIj5PY2Vsb3Q8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcblxcbjxkaXYgaWQ9XFxcInNlYXJjaC1maWx0ZXItcGFuZWxcXFwiIGNsYXNzPVxcXCJmaWx0ZXItcGFuZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDogI2VlZTsgY2xlYXI6IGJvdGg7IG1hcmdpbjogMjBweCAtMTBweCAyMHB4IC0xNXB4OyBwYWRkaW5nOiAyNXB4IDE1cHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ292dWstZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJnb3Z1ay1maWVsZHNldFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzPVxcXCJnb3Z1ay1maWVsZHNldF9fbGVnZW5kIGdvdnVrLWZpZWxkc2V0X19sZWdlbmQtLXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcImdvdnVrLWZpZWxkc2V0X19oZWFkaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBPdmVyYWxsIGRlY2lzaW9uXFxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcIndpdGgtaGludC1oaW50XFxcIiBjbGFzcz1cXFwiZ292dWstaGludFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIHRoaXMgYXBwbGljYXRpb24/XFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9sZWdlbmQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnb3Z1ay1yYWRpb3MgZ292dWstcmFkaW9zLS1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdvdnVrLXJhZGlvc19faXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJnb3Z1ay1yYWRpb3NfX2lucHV0XFxcIiBpZD1cXFwiY2hhbmdlZC1uYW1lXFxcIiBuYW1lPVxcXCJjaGFuZ2VkLW5hbWVcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiB2YWx1ZT1cXFwibW9udGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZ292dWstbGFiZWwgZ292dWstcmFkaW9zX19sYWJlbFxcXCIgZm9yPVxcXCJjaGFuZ2VkLW5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhbnRcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ292dWstcmFkaW9zX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImdvdnVrLXJhZGlvc19faW5wdXRcXFwiIGlkPVxcXCJjaGFuZ2VkLW5hbWUtMlxcXCIgbmFtZT1cXFwiY2hhbmdlZC1uYW1lXFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgdmFsdWU9XFxcInllYXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZ292dWstbGFiZWwgZ292dWstcmFkaW9zX19sYWJlbFxcXCIgZm9yPVxcXCJjaGFuZ2VkLW5hbWUtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWZ1c2VcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ292dWstcmFkaW9zX19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImdvdnVrLXJhZGlvc19faW5wdXRcXFwiIGlkPVxcXCJjaGFuZ2VkLW5hbWUtM1xcXCIgbmFtZT1cXFwiY2hhbmdlZC1uYW1lXFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgdmFsdWU9XFxcImRheVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJnb3Z1ay1sYWJlbCBnb3Z1ay1yYWRpb3NfX2xhYmVsXFxcIiBmb3I9XFxcImNoYW5nZWQtbmFtZS0zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFB1dCBvbiBob2xkXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ292dWstY2hhcmFjdGVyLWNvdW50XFxcIiBkYXRhLW1vZHVsZT1cXFwiZ292dWstY2hhcmFjdGVyLWNvdW50XFxcIiBkYXRhLW1heGxlbmd0aD1cXFwiMjAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnb3Z1ay1mb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiZ292dWstbGFiZWwtd3JhcHBlclxcXCI+PGxhYmVsIGNsYXNzPVxcXCJnb3Z1ay1sYWJlbCBnb3Z1ay1sYWJlbC0tc1xcXCIgZm9yPVxcXCJ3aXRoLWhpbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFueSBvdGhlciBub3RlcyBvciBjb25jZXJuXFxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwid2l0aC1oaW50LWhpbnRcXFwiIGNsYXNzPVxcXCJnb3Z1ay1oaW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgQWRkIGFueSBpbmZvcm1hdGlvbiB0byBzdXBwb3J0IHlvdXIgZGVjaXNpb25cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJnb3Z1ay10ZXh0YXJlYSBnb3Z1ay1qcy1jaGFyYWN0ZXItY291bnRcXFwiIGlkPVxcXCJ3aXRoLWhpbnRcXFwiIG5hbWU9XFxcIndpdGgtaGludFxcXCIgcm93cz1cXFwiNVxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwid2l0aC1oaW50LWluZm8gd2l0aC1oaW50LWhpbnRcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwid2l0aC1oaW50LWluZm9cXFwiIGNsYXNzPVxcXCJnb3Z1ay1oaW50IGdvdnVrLWNoYXJhY3Rlci1jb3VudF9fbWVzc2FnZVxcXCIgYXJpYS1saXZlPVxcXCJwb2xpdGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBlbnRlciB1cCB0byAyMDAgY2hhcmFjdGVyc1xcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XFxcIi9ob2xkXFxcIiBjbGFzcz1cXFwibm90LWdvdnVrLWZvcm1cXFwiIG1ldGhvZD1cXFwiZ2V0XFxcIj5cXG5cXG4gICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJnb3Z1ay1idXR0b25cXFwiXFxuICAgICAgICAgICAgdmFsdWU9XFxcIlN1Ym1pdFxcXCJcXG4gICAgICAgICAgLz5cXG4gICAgICAgIDwvZm9ybT5cXG5cXG48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8IS0tICAtLT5cXG48ZGl2IGNsYXNzPVxcXCJnb3Z1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmRcXFwiPlxcbiAgPGFzaWRlPlxcbiAgICAgICAgICA8aDI+VXBkYXRlczwvaDI+XFxuICAgICAgICAgIDxwPkxhdGVzdCBsaWNlbnNlIGluZm9ybWF0aW9uIGFzIG9mIFtEYXldIFtNb250aF0gW1llYXJdPC9wPlxcblxcbiAgICAgICAgICA8ZGV0YWlsc1xcbiAgY2xhc3M9XFxcImhvZHMtc3RhdHVzLWJhbm5lciBob2RzLXN0YXR1cy1iYW5uZXItLW5lZ2F0aXZlXFxcIlxcbj5cXG4gIDxzdW1tYXJ5IGNsYXNzPVxcXCJob2RzLXN0YXR1cy1iYW5uZXJfX3N1bW1hcnlcXFwiPlxcbiAgICBFeHBpcmVkXFxuICA8L3N1bW1hcnk+XFxuICA8ZGl2IGNsYXNzPVxcXCJob2RzLXN0YXR1cy1iYW5uZXJfX3RleHRcXFwiPlxcbiAgICBUaGlzIGxpY2VuY2UgaGFzIGV4cGlyZWQuIFRoZSBsaWNlbmNlIGhvbGRlciBvciBhcHBsaWNhbnQgaXMgYXV0aG9yaXNlZCB0byB3YWl0IHVudGlsIHRoZWlyIGxpY2VuY2UvYXBwbGljYXRpb24gaGFzIGJlZW4gcmVuZXdlZC5cXG4gIDwvZGl2PlxcbjwvZGV0YWlscz5cXG4gICAgICAgIDwvYXNpZGU+XFxuXFxuICAgICAgICA8YXNpZGU+XFxuICAgICAgICAgICAgICAgIDxoMj5TYXZhbm5haCBpbmZvcm1hdGlvbjwvaDI+XFxuICAgICAgICAgICAgICAgIDxwPlRoZSBTYXZhbm5haCBjYXQgaXMgdGhlIGxhcmdlc3Qgb2YgdGhlIGNhdCBicmVlZHMuIEEgU2F2YW5uYWggY2F0IGlzIGEgY3Jvc3MgYmV0d2VlbiBhIGRvbWVzdGljIGNhdCBhbmQgYSBzZXJ2YWwsIGEgbWVkaXVtLXNpemVkLCBsYXJnZS1lYXJlZCB3aWxkIEFmcmljYW4gY2F0LiBUaGUgdW51c3VhbCBjcm9zcyBiZWNhbWUgcG9wdWxhciBhbW9uZyBicmVlZGVycyBhdCB0aGUgZW5kIG9mIHRoZSAxOTkwcywgYW5kIGluIDIwMDEgVGhlIEludGVybmF0aW9uYWwgQ2F0IEFzc29jaWF0aW9uIChUSUNBKSBhY2NlcHRlZCBpdCBhcyBhIG5ldyByZWdpc3RlcmVkIGJyZWVkLiBJbiBNYXkgMjAxMiwgVElDQSBhY2NlcHRlZCBpdCBhcyBhIGNoYW1waW9uc2hpcCBicmVlZC48L3A+XFxuPHA+PGEgaHJlZj1cXFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2F2YW5uYWhfY2F0XFxcIiBjbGFzcz1cXFwiZ292dWstbGlua1xcXCI+TW9yZSBpbmZvcm1hdGlvbjwvYT48L3A+XFxuXFxuICAgICAgICAgICAgICA8L2FzaWRlPlxcbjwvZGl2PlxcbiAgICAgIDwhLS0gIC0tPlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvbWFpbj5cXG48L2Rpdj5cXG5cXG4gIDwvRnJhZ21lbnQ+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/pages/case-3.html\n");

/***/ })

};