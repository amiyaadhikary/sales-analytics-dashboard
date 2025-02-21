// Revenue Trend Chart
const monthlyRevenue = {
  x: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  y: [
    65000, 72000, 85000, 93000, 88000, 95000, 102000, 108000, 92000, 89000,
    98000, 110000,
  ],
  type: "scatter",
  mode: "lines+markers",
  line: {
    color: "#3498db",
    width: 3,
  },
  marker: {
    color: "#3498db",
    size: 8,
  },
};

const revenueTrendLayout = {
  height: 300,
  margin: { t: 20, r: 20, b: 40, l: 40 },
  xaxis: { showgrid: false },
  yaxis: {
    showgrid: true,
    gridcolor: "#f0f0f0",
    tickprefix: "$",
  },
};

Plotly.newPlot("revenueTrend", [monthlyRevenue], revenueTrendLayout);

// Sales by Category Chart
const salesByCategory = {
  values: [35, 25, 20, 15, 5],
  labels: ["Electronics", "Clothing", "Home & Garden", "Sports", "Other"],
  type: "pie",
  marker: {
    colors: ["#3498db", "#2ecc71", "#e74c3c", "#f1c40f", "#95a5a6"],
  },
};

const categoryLayout = {
  height: 300,
  margin: { t: 20, r: 20, b: 20, l: 20 },
  showlegend: true,
  legend: {
    orientation: "h",
    y: -0.2,
  },
};

Plotly.newPlot("salesByCategory", [salesByCategory], categoryLayout);

// Regional Sales Chart
const regions = ["North", "South", "East", "West", "Central"];
const regionalData = {
  type: "bar",
  x: regions,
  y: [250000, 185000, 220000, 195000, 175000],
  marker: {
    color: "#2ecc71",
  },
};

const regionalLayout = {
  height: 300,
  margin: { t: 20, r: 20, b: 40, l: 60 },
  yaxis: {
    tickprefix: "$",
    showgrid: true,
    gridcolor: "#f0f0f0",
  },
  xaxis: {
    showgrid: false,
  },
};

Plotly.newPlot("regionalSales", [regionalData], regionalLayout);

// Daily Orders Chart
const days = Array.from({ length: 30 }, (_, i) => i + 1);
const orders = days.map(() => Math.floor(Math.random() * 20) + 30);

const dailyOrdersData = {
  type: "scatter",
  x: days,
  y: orders,
  mode: "lines",
  line: {
    color: "#e74c3c",
    width: 2,
  },
  fill: "tozeroy",
  fillcolor: "rgba(231, 76, 60, 0.1)",
};

const dailyOrdersLayout = {
  height: 300,
  margin: { t: 20, r: 20, b: 40, l: 40 },
  yaxis: {
    showgrid: true,
    gridcolor: "#f0f0f0",
  },
  xaxis: {
    showgrid: false,
    title: "Day of Month",
  },
};

Plotly.newPlot("dailyOrders", [dailyOrdersData], dailyOrdersLayout);
