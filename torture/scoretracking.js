const grade = {
  "SSS+": 1,
  "SSS": 2,
  "SS+": 3,
  "SS": 4,
  "S+": 5,
  "S": 6,
  "AAA+": 7,
  "AAA": 8,
  "AA+": 9,
  "AA": 10,
  "A+": 11,
  "A": 12,
  "B": 13,
  "C": 14,
  "D": 15,
  "F": 16,
};

const color = {
  "SSS+": "#00E3FF",
  "SSS": "#00E3FF",
  "SS+": "#FFC900",
  "SS": "#FFC900",
  "S+": "#FFC900",
  "S": "#FFC900",
  "AAA+": "#AFAFAF",
  "AAA": "#AFAFAF",
  "AA+": "#844400",
  "AA": "#844400",
  "A+": "#844400",
  "A": "#844400",
  "B": "#00FF90",
  "C": "#00FF90",
  "D": "#00FF90",
  "F": "#00FF90",
};

const cleartype = {
  "Perfect Game": 1,
  "Ultimate Game": 2,
  "Extreme Game": 3,
  "Superb Game": 4,
  "Marvelous Game": 5,
  "Talented Game": 6,
  "Fair Game": 7,
  "Rough Game": 8,
};

let perfectCount = parseInt(document.getElementById("pf").value);
let greatCount = parseInt(document.getElementById("gr").value);
let goodCount = parseInt(document.getElementById("gd").value);
let badCount = parseInt(document.getElementById("bd").value);
let missCount = parseInt(document.getElementById("ms").value);
let maxcombo = parseInt(document.getElementById("mc").value);
let notecount = parseInt(document.getElementById("nc").value); // TODO: get this automatically from a specific chart

function updateValue() {
  let inputs = [
    document.getElementById("pf"),
    document.getElementById("gr"),
    document.getElementById("gd"),
    document.getElementById("bd"),
    document.getElementById("ms"),
    document.getElementById("mc"),
    document.getElementById("nc"),
  ];
  inputs.forEach((input) => {
    input.value = input.value.replace(/[^0-9]/g, "");
  });

  if (
    (
      perfectCount +
      greatCount +
      goodCount +
      badCount +
      missCount +
      maxcombo +
      notecount
    ).length === 0
  ) {
    set_score();
    return;
  }
  let perfects = perfectCount ? parseInt(perfectCount) : 0;
  let greats = greatCount ? parseInt(greatCount) : 0;
  let goods = goodCount ? parseInt(goodCount) : 0;
  let bads = badCount ? parseInt(badCount) : 0;
  let misses = missCount ? parseInt(missCount) : 0;

  let max_combo = maxcombo ? parseInt(maxcombo) : 0;
  let total_steps = notecount ? parseInt(notecount) : 0;

  if (notecount.length === 0) {
    notecount = perfects + greats + goods + bads + misses;
    notecount.placeholder = notecount;
  }

  if (perfectCount && greatCount && goodCount && badCount && missCount) {
    total_steps = perfects + greats + goods + bads + misses;
    document.getElementById("nc").value = "";
    document.getElementById("nc").placeholder = total_steps;
  }

  let steps_left = total_steps;
  if (perfectCount) {
    steps_left -= perfects;
  }
  if (greatCount) {
    steps_left -= greats;
  }
  if (goodCount) {
    steps_left -= goods;
  }
  if (badCount) {
    steps_left -= bads;
  }
  if (missCount) {
    steps_left -= misses;
  }

  if (!perfectCount) {
    perfects = steps_left;
    document.getElementById("pf").placeholder = perfects;
    steps_left = 0;
  }
  if (!greatCount) {
    greats = steps_left;
    document.getElementById("gr").placeholder = greats;
    steps_left = 0;
  }
  if (!goodCount) {
    goods = steps_left;
    document.getElementById("gd").placeholder = goods;
    steps_left = 0;
  }
  if (!badCount) {
    bads = steps_left;
    document.getElementById("bd").placeholder = bads;
    steps_left = 0;
  }
  if (!missCount) {
    misses = steps_left;
    document.getElementById("ms").placeholder = misses;
  }

  if (!maxcombo) {
    max_combo = perfects + greats;
    document.getElementById("pf").placeholder = perfects + greats;
  }

  set_score(
    calculatePhoenixScore({
      perfects: perfects,
      greats: greats,
      goods: goods,
      bads: bads,
      misses: misses,
      totalSteps: total_steps,
      maxCombo: max_combo,
    })
  );
}
function calculatePhoenixScore(score) {
    let perfects = score.perfects;
    let greats = score.greats;
    let goods = score.goods;
    let bads = score.bads;
    let misses = score.misses;
    let totalSteps = perfects + greats + goods + bads + misses;
    let combo = score.maxCombo;

    return (995000*(perfects+0.6*greats+0.2*goods+0.1*bads)/(totalSteps)+5000*(combo/(totalSteps))) | 0;
}

function set_score(score) {
    document.getElementById("score").innerHTML = score;
}

function convertToPhoenixGrading(score)
{
if (score >= 995000)
{
    grade = "SSS+";
    color = "#00E3FF";
}
}