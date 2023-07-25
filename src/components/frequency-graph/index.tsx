import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Change the import statement
import Card from 'react-bootstrap/Card';

function FrequencyGraph() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null); // Use a ref to hold the chart instance

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstanceRef.current) {
                // If a chart instance exists, destroy it before creating a new chart
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [
                            {
                                label: 'Monthly Sales',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                        responsive: true, // Allow the chart to be responsive
                    },
                });
            }
        }
    }, []);


    return (
        <Card>
            <Card.Body>
                <Card.Title>Frequency Graph</Card.Title>
                <canvas ref={chartRef}></canvas>

            </Card.Body>
        </Card>
    );
}

export default FrequencyGraph;