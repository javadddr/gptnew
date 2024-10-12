import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import "./PrivacyPolicy.css";
import Typed from 'typed.js';
import logo130 from "./assets/dash12.png";
import { PlayCircleTwoTone } from "@ant-design/icons";
import { Card, Typography } from 'antd';

export default function HomePro() {


  const trackAction = async (actionName) => {
    try {
      const response = await fetch('https://api.dynamofleet.com/dywebsite/trackAction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ actionName }),
      });
      if (response.ok) {
        // Success
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

 

  return (
    <div className="flex justify-center p-4">
      <Card
      
        className="w-full lg:max-w-[1370px] md:max-w-[970px] p-4"
        bodyStyle={{ padding: 0, overflow: 'hidden' }}
      >
        <div className="flex flex-col md:flex-row justify-between">
          {/* Image on the left for large/medium screens, below text for small */}
          <img
            alt="dashboard"
            src={logo130}
            className="w-full sm:w-[650px] lg:w-[850px] mb-4 md:mb-0 mx-auto"
          />
          
          {/* Text content */}
          <div className="md:pl-8 flex flex-col justify-between text-center">
            <Typography.Title level={6} className="text-gray-800 flex justify-start">
              Advanced analytical dashboards
            </Typography.Title>
            
            <Typography.Text className="text-gray-600 mb-4">
              <div className="bg-white p-2 max-w-xl mx-auto">
                <h2 className="text-base text-gray-600 mb-2 text-start" style={{ fontSize: 16, marginBottom: "30px" }}>
                  Use our intuitive Webapp and Spreadsheet Add-Ins to monitor shipments from over 2,000 couriers.
                </h2>
                <ul className="space-y-2 text-gray-700 text-xs" style={{ fontSize: 14}}>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 mr-1 text-center justify-center items-center">
                      <PlayCircleTwoTone style={{ fontSize: '20px' }} />
                    </span>
                    Excel and Google Sheets Add-Ins
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 mr-1 text-center justify-center items-center">
                      <PlayCircleTwoTone style={{ fontSize: '20px' }} />
                    </span>
                    Centralized Data Management
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 mr-1 text-center justify-center items-center">
                      <PlayCircleTwoTone style={{ fontSize: '20px' }} />
                    </span>
                    Customized Dashboards
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 mr-1 text-center justify-center items-center">
                      <PlayCircleTwoTone style={{ fontSize: '20px' }} />
                    </span>
                    Data Transfer to your Business Tools
                  </li>
                </ul>
              </div>
            </Typography.Text>
            
            <Button color="danger" variant="flat" href="https://ant.design" target="_blank">
              Get Started
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

