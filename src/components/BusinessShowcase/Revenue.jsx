"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const bar_chart_options = {
  series: [{
    name: '',
    data: ['06', '04', '03', '01']
  }, {
    name: '',
    data: ['05', '03', '01', 0.2]
  }],
  colors: ['#c20b0b', '#000000'],
  chart: {
    type: 'bar',
    height: 450,
    theme: 'dark',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 8,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['2023', '2022', '2021', '2020'],
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " $"
      }
    }
  },
};

function Revenue() {
  const [renderChart, setRenderChart] = useState(false);

  useEffect(() => {
    setRenderChart(true);
  }, []);

  return (
    <section className="tc-revenue-style6">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5">
            <div className="info js-splittext-lines">
              <h6 className="color-red1 fsz-14 text-uppercase mb-30 fw-bold"> <span className="icon me-2"> &gt; </span>  revenue </h6>
              <h2 className="fsz-50 fw-600 mb-50"> Business Include Develop & Execute </h2>
              <div className="text fsz-17 color-666"> This involves creating video content for various purposes, such as product demos, corporate videos, social media  content, and more. </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="chart-side mt-4 mt-lg-0 wow zoomIn slow" data-wow-delay="0.2s">
              {
                renderChart &&
                <Chart
                  options={bar_chart_options}
                  series={bar_chart_options.series}
                  type="bar"
                />
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Revenue