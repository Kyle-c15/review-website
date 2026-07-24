const QUESTIONS = [
  {
    id: 1, chapter: "蛋白质", mode: "单选", stem: "上臂肌围（AMC）的计算公式是", options: ["AC + 3.14 × TSF", "AC - 3.14 × TSF", "AC - TSF ÷ 3.14", "TSF - 3.14 × AC"], answer: [1], explanation: "AMC（mm）= AC（mm）- 3.14 × TSF（mm），上臂肌围和上臂肌区可用于评价总体蛋白质储存。", tip: "公式题先抓住“上臂围减去皮褶厚度乘以 3.14”。"
  },
  {
    id: 2, chapter: "蛋白质", mode: "单选", stem: "SAAR 大于多少时提示蛋白质营养不良？", options: ["1", "2", "3", "5"], answer: [2], explanation: "本 PDF 中 SAAR <2 为正常，>3 为蛋白质营养不良；2-3 之间不能直接套用这两个结论。", tip: "SAAR 是反向记忆：数值升高反而提示蛋白质营养不良。"
  },
  {
    id: 3, chapter: "蛋白质", mode: "多选", stem: "关于本段蛋白质营养学内容，正确的是", options: ["动物性蛋白质通常质量和利用率较高", "植物性蛋白质利用率通常较低", "动物性蛋白质通常不含饱和脂肪酸", "大豆和牛奶可作为优质蛋白质食物来源"], answer: [0, 1, 3], explanation: "动物性蛋白质质量和利用率通常较高，但往往伴随较多饱和脂肪酸和胆固醇；植物蛋白可通过合理搭配实现互补。", tip: "多选题注意“通常”“往往”等限定词。"
  },
  {
    id: 4, chapter: "蛋白质", mode: "单选", stem: "中国营养学会在本段列出的成年男性蛋白质 RNI 是", options: ["45 g/d", "55 g/d", "65 g/d", "75 g/d"], answer: [2], explanation: "PDF 所列成人蛋白质 RNI：男性 65 g/d，女性 55 g/d。", tip: "男女数值成对记忆：男 65，女 55。"
  },
  {
    id: 5, chapter: "脂类", mode: "单选", stem: "1 g 脂肪在体内约可产生多少能量？", options: ["4 kcal（16.7 kJ）", "5.65 kcal（23.65 kJ）", "9.46 kcal（39.7 kJ）", "16.7 kcal（70 kJ）"], answer: [2], explanation: "教材在脂肪生理功能部分列出 1 g 脂肪约产生 39.7 kJ（9.46 kcal）；实际混合膳食换算常取 9 kcal/g。", tip: "脂肪约 9 kcal/g，糖和蛋白质约 4 kcal/g。"
  },
  {
    id: 6, chapter: "脂类", mode: "多选", stem: "食物中脂肪的作用包括", options: ["增加饱腹感", "改善食物的色、香、味、形", "促进脂溶性维生素吸收", "直接替代氧气参与呼吸"], answer: [0, 1, 2], explanation: "脂肪可延缓胃排空、改善食品感官性状，并作为脂溶性维生素 A、D、E、K 的来源和吸收促进因素。", tip: "功能题优先排除与营养代谢无关的绝对化表述。"
  },
  {
    id: 7, chapter: "脂类", mode: "多选", stem: "下列属于人体必需脂肪酸的是", options: ["亚油酸", "α-亚麻酸", "EPA", "DHA"], answer: [0, 1], explanation: "本 PDF 明确列出的必需脂肪酸是亚油酸和 α-亚麻酸。EPA、DHA 是重要的长链多不饱和脂肪酸，但不属于这里列出的 EFA。", tip: "不要把“重要”与“必需”混为一谈。"
  },
  {
    id: 8, chapter: "脂类", mode: "单选", stem: "长链脂肪酸通常含有多少个碳原子？", options: ["≤6 个", "8-12 个", "14-24 个", ">30 个"], answer: [2], explanation: "短链脂肪酸为 6 个碳以下，中链为 8-12 个碳，长链为 14-24 个碳。", tip: "分类中 6、8-12、14-24 是高频数字组合。"
  },
  {
    id: 9, chapter: "脂类", mode: "单选", stem: "脂肪消化吸收后，长链脂肪酸在小肠细胞内重新合成甘油三酯，并主要形成哪种运输形式？", options: ["乳糜微粒", "高密度脂蛋白（HDL）", "低密度脂蛋白（LDL）", "糖原"], answer: [0], explanation: "长链脂肪酸等在小肠细胞内重新合成甘油三酯，与磷脂、胆固醇和蛋白质形成乳糜微粒，经淋巴进入血液。", tip: "小肠外源性脂肪运输先想到乳糜微粒。"
  },
  {
    id: 10, chapter: "脂类", mode: "多选", stem: "关于脂蛋白运输，正确的是", options: ["VLDL 主要由肝脏合成并运输内源性甘油三酯", "LDL 过多可与动脉粥样硬化等疾病有关", "HDL 可将胆固醇运回肝脏代谢", "HDL 是食物脂肪进入血液的唯一形式"], answer: [0, 1, 2], explanation: "VLDL 主要运输内源性甘油三酯；LDL 可将胆固醇送入细胞，过多有害；HDL 参与胆固醇逆向转运。", tip: "乳糜微粒、VLDL、LDL、HDL 要按来源和去向区分。"
  },
  {
    id: 11, chapter: "碳水化合物", mode: "单选", stem: "按 FAO/WHO 分类，由 3-9 个单糖组成的碳水化合物是", options: ["糖", "寡糖", "多糖", "糖醇"], answer: [1], explanation: "糖含 1-2 个单糖，寡糖含 3-9 个单糖，多糖含 10 个或以上单糖。", tip: "分类记成 1-2、3-9、≥10。"
  },
  {
    id: 12, chapter: "碳水化合物", mode: "多选", stem: "关于碳水化合物消化，正确的是", options: ["消化从口腔开始", "胃液含有大量水解碳水化合物的酶", "主要消化场所是小肠", "部分不能在小肠消化的碳水化合物可在结肠发酵"], answer: [0, 2, 3], explanation: "口腔唾液中的 α-淀粉酶开始消化；胃液不含水解碳水化合物的酶；主要消化在小肠，不能消化部分可到结肠发酵。", tip: "胃液无碳水化合物消化酶，是常见陷阱。"
  },
  {
    id: 13, chapter: "碳水化合物", mode: "单选", stem: "GI 大于多少通常属于高 GI 食物？", options: ["50", "55", "70", "85"], answer: [2], explanation: "本 PDF 中 GI >70 为高 GI，55-70 为中 GI，≤55 为低 GI。", tip: "GI 的三个分界点是 55 和 70。"
  },
  {
    id: 14, chapter: "碳水化合物", mode: "单选", stem: "GL 的计算公式是", options: ["GI ÷ 摄入碳水化合物重量", "摄入碳水化合物重量 × GI ÷ 100", "摄入碳水化合物重量 ÷ GI × 100", "GI × 脂肪摄入量"], answer: [1], explanation: "GL = 摄入食品中碳水化合物的重量 × 食品 GI 值 ÷ 100。GL 同时考虑了食物质量和实际摄入量。", tip: "GI 看升糖速度，GL 再乘实际摄入量。"
  },
  {
    id: 15, chapter: "碳水化合物", mode: "多选", stem: "关于抗性淀粉，正确的是", options: ["RS1 的消化会受到食物成分包裹的影响", "RS2 是生淀粉粒", "RS3 是烹煮或糊化后形成的回生淀粉", "抗性淀粉可在小肠被完全吸收"], answer: [0, 1, 2], explanation: "RS1、RS2、RS3 分别对应被包裹、生淀粉粒和回生淀粉；抗性淀粉不能在小肠被吸收，可在大肠发酵。", tip: "抗性淀粉的“抗性”指抗小肠消化。"
  },
  {
    id: 16, chapter: "能量", mode: "单选", stem: "三大产能营养素中，食物热效应最大的是", options: ["脂肪", "碳水化合物", "蛋白质", "酒精"], answer: [2], explanation: "蛋白质食物热效应为其产生能量的 20%-30%，高于脂肪的 0%-5% 和碳水化合物的 5%-10%。", tip: "食物热效应大小：蛋白质 > 碳水化合物 > 脂肪。"
  },
  {
    id: 17, chapter: "能量", mode: "多选", stem: "基础代谢状态通常要求", options: ["空腹 10-12 小时", "清醒仰卧", "恒温约 22-26°C", "进行中等强度运动后立即测量"], answer: [0, 1, 2], explanation: "基础代谢测定要求空腹、睡眠后清醒仰卧、恒温、无身体活动和紧张思维活动，肌肉放松。", tip: "基础代谢的关键词是空腹、安静、恒温、清醒仰卧。"
  },
  {
    id: 18, chapter: "能量", mode: "单选", stem: "基础代谢约占人体总能量消耗的", options: ["5%-10%", "15%-30%", "40%-50%", "60%-70%"], answer: [3], explanation: "基础代谢约占人体总能量消耗的 60%-70%；身体活动约占 15%-30%。", tip: "基础代谢是总消耗中的最大部分。"
  },
  {
    id: 19, chapter: "能量", mode: "多选", stem: "关于能量测定方法，正确的是", options: ["直接测热法直接收集人体向环境散发的热量", "间接测热法可测定氧耗量和二氧化碳产生量", "双标水法通常可测 7-15 天自由生活的总能量消耗", "行为记录法完全不受回忆偏倚影响"], answer: [0, 1, 2], explanation: "直接测热、间接测热、双标水法各有适用范围；行为记录法可能受回忆偏倚和记录误差影响。", tip: "“完全”“不受”往往是多选题中的错误绝对化表述。"
  },
  {
    id: 20, chapter: "能量", mode: "单选", stem: "中国成年人身体活动水平中，轻度、中等、重度 PAL 分别为", options: ["1.2、1.5、1.75", "1.5、1.75、2.0", "1.75、2.0、2.5", "2.0、2.5、3.0"], answer: [1], explanation: "中国营养学会建议成人轻体力活动 PAL 1.5，中等 1.75，重度 2.0；明显体育运动或重体力休闲活动者可增加 0.3。", tip: "PAL 按 1.5 → 1.75 → 2.0 递增。"
  },
  {
    id: 21, chapter: "矿物质", mode: "单选", stem: "人体内含量大于体重 0.01% 的矿物质称为", options: ["常量元素", "微量元素", "有机元素", "潜在毒性元素"], answer: [0], explanation: "体内含量大于体重 0.01% 的为常量元素，小于 0.01% 的为微量元素。", tip: "常量元素的判断界限是 0.01%。"
  },
  {
    id: 22, chapter: "矿物质", mode: "多选", stem: "矿物质的特点包括", options: ["不能在体内合成", "可通过天然水获得", "体内分布极不均匀", "摄入越多越安全"], answer: [0, 1, 2], explanation: "矿物质需要从外界摄取，可由天然水提供，体内分布不均且部分元素的生理剂量与中毒剂量范围较窄。", tip: "矿物质同样存在过量和毒性风险。"
  },
  {
    id: 23, chapter: "矿物质", mode: "多选", stem: "关于钙代谢，正确的是", options: ["离子钙是主要生理活性形式", "血钙降低时 PTH 可使血钙恢复升高", "降钙素促进破骨细胞活动", "钙主动吸收主要发生在十二指肠和小肠上段"], answer: [0, 1, 3], explanation: "离子钙具有生理活性；低血钙时 PTH 促进骨钙释放、活性维生素D形成、肠吸收和肾重吸收；降钙素总体上抑制骨吸收。", tip: "PTH 升血钙，降钙素降血钙。"
  },
  {
    id: 24, chapter: "矿物质", mode: "多选", stem: "下列因素中，可促进钙吸收的是", options: ["乳糖", "植酸", "部分氨基酸", "孕期和哺乳期的生理适应"], answer: [0, 2, 3], explanation: "乳糖发酵产酸、部分氨基酸形成可溶性钙盐，孕期和哺乳期主动及被动吸收均增加；植酸会与钙形成难溶盐而抑制吸收。", tip: "促进/抑制因素要按“形成可溶性盐”或“形成难溶性盐”判断。"
  }
];

const STORAGE_KEY = "nutrition-quiz-progress-v1";
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
const state = {
  view: "practice",
  chapter: "全部",
  mode: "全部",
  index: 0,
  answers: saved.answers || {},
  submitted: saved.submitted || {},
  bookmarks: saved.bookmarks || [],
  wrong: saved.wrong || [],
  lastActive: saved.lastActive || Date.now()
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    answers: state.answers, submitted: state.submitted, bookmarks: state.bookmarks,
    wrong: state.wrong, lastActive: state.lastActive
  }));
}

function sameAnswers(a, b) {
  return a && b && a.length === b.length && [...a].sort().every((value, index) => Number(value) === Number([...b].sort()[index]));
}

function activeQuestions() {
  let items = QUESTIONS.filter((question) => state.chapter === "全部" || question.chapter === state.chapter);
  if (state.mode !== "全部") items = items.filter((question) => question.mode === state.mode);
  if (state.view === "wrong") items = items.filter((question) => state.wrong.includes(question.id));
  if (state.view === "bookmarks") items = items.filter((question) => state.bookmarks.includes(question.id));
  return items;
}

function currentQuestion() {
  const items = activeQuestions();
  return items[state.index] || null;
}

function setView(view) {
  state.view = view;
  state.index = 0;
  $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  $("#pageTitle").textContent = view === "practice" ? "章节练习" : view === "wrong" ? "错题本" : "收藏题";
  render();
}

function renderFilters() {
  $$(".filter-chip").forEach((button) => button.classList.toggle("is-selected", button.dataset.chapter === state.chapter));
  $("#modeSelect").value = state.mode;
  $("#filterRow").hidden = state.view !== "practice";
}

function renderQuestion() {
  const question = currentQuestion();
  const items = activeQuestions();
  const card = $("#questionCard");
  const empty = $("#emptyState");
  if (!question) {
    card.hidden = true;
    empty.hidden = false;
    $("#mapCount").textContent = `${items.length} 题`;
    $("#questionNumber").textContent = "--";
    return;
  }
  card.hidden = false;
  empty.hidden = true;
  const selected = (state.answers[question.id] || []).map(Number);
  const submitted = Boolean(state.submitted[question.id]);
  $("#chapterTag").textContent = question.chapter;
  $("#typeTag").textContent = `${question.mode}题`;
  $("#questionKicker").textContent = `QUESTION ${String(question.id).padStart(2, "0")}`;
  $("#questionStem").textContent = question.stem;
  $("#questionHint").textContent = question.mode === "多选" ? "本题为多选题，选择全部正确选项。" : "本题为单选题，选择一个最符合题意的选项。";
  $("#questionNumber").textContent = `${state.index + 1} / ${items.length}`;
  $("#bookmarkButton").classList.toggle("is-saved", state.bookmarks.includes(question.id));
  $("#bookmarkIcon").textContent = state.bookmarks.includes(question.id) ? "★" : "☆";
  $("#bookmarkText").textContent = state.bookmarks.includes(question.id) ? "已收藏" : "收藏";
  $("#prevButton").disabled = state.index === 0;
  $("#nextButton").disabled = state.index >= items.length - 1;
  $("#submitButton").textContent = submitted ? "重新作答" : "提交答案";
  $("#saveStatus").textContent = submitted ? "答案已记录" : selected.length ? "已选择答案" : "选择答案后提交";
  $("#optionsList").innerHTML = question.options.map((option, optionIndex) => {
    const inputType = question.mode === "多选" ? "checkbox" : "radio";
    const checked = selected.includes(optionIndex) ? "checked" : "";
    const id = `q${question.id}-o${optionIndex}`;
    return `<div class="option" data-option-index="${optionIndex}"><input id="${id}" name="question-${question.id}" type="${inputType}" value="${optionIndex}" ${checked}><label for="${id}"><span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span></label></div>`;
  }).join("");
  $$("#optionsList input").forEach((input) => input.addEventListener("change", onAnswerChange));
  if (submitted) showFeedback(question);
  else $("#feedback").hidden = true;
}

function showFeedback(question) {
  const selected = (state.answers[question.id] || []).map(Number);
  const correct = sameAnswers(selected, question.answer);
  const feedback = $("#feedback");
  feedback.hidden = false;
  feedback.classList.toggle("is-wrong", !correct);
  $("#feedbackIcon").textContent = correct ? "✓" : "!";
  $("#feedbackTitle").textContent = correct ? "回答正确" : "需要复习";
  $("#feedbackText").textContent = `正确答案：${question.answer.map((index) => String.fromCharCode(65 + index)).join("、")}`;
  $("#explanation").textContent = question.explanation;
  $$("#optionsList .option").forEach((option) => {
    const optionIndex = Number(option.dataset.optionIndex);
    option.classList.toggle("is-correct", question.answer.includes(optionIndex));
    option.classList.toggle("is-wrong", selected.includes(optionIndex) && !question.answer.includes(optionIndex));
  });
}

function onAnswerChange() {
  const question = currentQuestion();
  if (!question) return;
  const selected = $$("#optionsList input:checked").map((input) => Number(input.value));
  state.answers[question.id] = selected;
  state.submitted[question.id] = false;
  persist();
  $("#saveStatus").textContent = selected.length ? "已选择答案" : "选择答案后提交";
  updateStats();
}

function submitAnswer() {
  const question = currentQuestion();
  if (!question) return;
  if (state.submitted[question.id]) {
    state.submitted[question.id] = false;
    renderQuestion();
    return;
  }
  const selected = state.answers[question.id] || [];
  if (!selected.length) {
    $("#saveStatus").textContent = "请先选择答案";
    $("#optionsList").animate([{ transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "translateX(0)" }], { duration: 180 });
    return;
  }
  state.submitted[question.id] = true;
  const correct = sameAnswers(selected, question.answer);
  if (correct) state.wrong = state.wrong.filter((id) => id !== question.id);
  else if (!state.wrong.includes(question.id)) state.wrong.push(question.id);
  persist();
  renderQuestion();
  updateStats();
}

function toggleBookmark() {
  const question = currentQuestion();
  if (!question) return;
  if (state.bookmarks.includes(question.id)) state.bookmarks = state.bookmarks.filter((id) => id !== question.id);
  else state.bookmarks.push(question.id);
  persist();
  renderQuestion();
  updateStats();
}

function updateStats() {
  const answered = QUESTIONS.filter((question) => state.submitted[question.id]);
  const correct = answered.filter((question) => sameAnswers((state.answers[question.id] || []).map(Number), question.answer)).length;
  const percent = answered.length ? Math.round(correct / answered.length * 100) : 0;
  const visible = activeQuestions();
  const visibleAnswered = visible.filter((question) => state.submitted[question.id]).length;
  const visibleWrong = visible.filter((question) => state.wrong.includes(question.id)).length;
  $("#completedNumber").textContent = answered.length;
  $("#accuracyNumber").textContent = answered.length ? `${percent}%` : "--";
  $("#progressBar").style.width = `${Math.round(answered.length / QUESTIONS.length * 100)}%`;
  $("#sessionPercent").textContent = `${visible.length ? Math.round(visibleAnswered / visible.length * 100) : 0}%`;
  $("#sessionBar").style.width = `${visible.length ? Math.round(visibleAnswered / visible.length * 100) : 0}%`;
  $("#railDone").textContent = visibleAnswered;
  $("#railCorrect").textContent = visible.filter((question) => state.submitted[question.id] && !state.wrong.includes(question.id)).length;
  $("#railWrong").textContent = visibleWrong;
  $("#wrongCount").textContent = state.wrong.length;
  $("#streakText").textContent = answered.length ? `${answered.length} 题已完成` : "今天开始";
  $("#mapCount").textContent = `${visible.length} 题`;
}

function renderMap() {
  const items = activeQuestions();
  const question = currentQuestion();
  $("#questionMap").innerHTML = items.map((item, itemIndex) => {
    const classes = ["map-button"];
    if (question && item.id === question.id) classes.push("is-current");
    if (state.submitted[item.id]) classes.push("is-done");
    if (state.wrong.includes(item.id)) classes.push("is-wrong");
    return `<button type="button" class="${classes.join(" ")}" data-map-index="${itemIndex}" aria-label="第 ${itemIndex + 1} 题">${itemIndex + 1}</button>`;
  }).join("");
  $$(".map-button").forEach((button) => button.addEventListener("click", () => { state.index = Number(button.dataset.mapIndex); render(); }));
}

function render() {
  renderFilters();
  renderQuestion();
  renderMap();
  updateStats();
  const question = currentQuestion();
  $("#memoryTip").textContent = question ? question.tip : "完成更多练习后，这里会显示对应章节的记忆提示。";
}

function changeFilter(chapter) { state.chapter = chapter; state.index = 0; state.view = "practice"; $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === "practice")); render(); }

$("#filterRow").addEventListener("click", (event) => { const button = event.target.closest(".filter-chip"); if (button) changeFilter(button.dataset.chapter); });
$("#modeSelect").addEventListener("change", (event) => { state.mode = event.target.value; state.index = 0; render(); });
$("#submitButton").addEventListener("click", submitAnswer);
$("#bookmarkButton").addEventListener("click", toggleBookmark);
$("#prevButton").addEventListener("click", () => { if (state.index > 0) { state.index -= 1; render(); } });
$("#nextButton").addEventListener("click", () => { if (state.index < activeQuestions().length - 1) { state.index += 1; render(); } });
$("#resetProgress").addEventListener("click", () => {
  if (!confirm("确定清空全部答题、错题和收藏记录吗？")) return;
  state.answers = {}; state.submitted = {}; state.bookmarks = []; state.wrong = [];
  persist(); render();
});
$$('[data-view]').forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));

render();
