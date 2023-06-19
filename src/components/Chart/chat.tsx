import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../Chart/chat.scss";
import Market from "../../assets/Images/marketChat.png";

const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chat = () => {
  const [prices, setPrices] = useState<[number, number][]>([]);
  const [days, setDays] = useState("1");

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`
    )
      .then((res) => res.json())
      .then((res) => setPrices(res.prices))
      .catch((err) => console.log(err));
  }, [days]);

  const data = {
    labels: prices.map((p, index) => {
      if (index === 0 || index === prices.length - 1 || index % 4 === 0) {
        const currentDate = new Date(p[0]);
        const date = currentDate.getDate();
        const month = currentDate.getMonth();
        return date + " " + monthList[month];
      } else {
        return "";
      }
    }),
    datasets: [
      {
        label: "Bitcoin",
        data: prices.map((p) => p[1]),
        borderColor: "#7AC231",
        backgroundColor: "transparent",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <div className="mx">
        <div className="chat-wrapper">
          <div className="chart_container">
            <div className="chart_header">
              <h3>Bitcoin Chart</h3>
              <div className="chart_controls">
                <button onClick={() => setDays("1")} className={days === "1" ? "active" : ""}>
                  1d
                </button>
                <button onClick={() => setDays("7")} className={days === "7" ? "active" : ""}>
                  1w
                </button>
                <button onClick={() => setDays("30")} className={days === "30" ? "active" : ""}>
                  1m
                </button>
              </div>
            </div>
            <div className="chart_list">
              <Line
                options={{
                  responsive: true,
                  aspectRatio: 400 / 150,
                  plugins: {
                    legend: {
                      position: "top" as const,
                      display: false,
                      labels: {
                        color: "white", // Change the color of labels here
                      },
                    },
                    title: {
                      display: false,
                    },
                  },

                  elements: {
                    line: {
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                    },
                  },
                }}
                data={data}
              />
            </div>
          </div>
          {/* <img className="btc" src={Btc} alt="" /> */}
          <img className="market" src={Market} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
