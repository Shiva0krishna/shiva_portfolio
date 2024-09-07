import React from 'react'
import { Row } from 'react-bootstrap'
import LeetCodeCalendar from 'leetcode-calendar';

export default function Leetcode() {
    const exampleTheme = {
    light: [
      'rgb(235, 235, 235)',  
      'rgba(144, 138, 144, 0.44)',
      'rgba(60, 179, 113, 0.6)',  
      'rgba(34, 139, 34, 0.76)',  
      'rgba(0, 100, 0, 0.92)',    
    ],
    dark: [
      'rgb(235, 235, 235)',
      'rgba(100, 238, 100, 0.64)',
      'rgba(60, 179, 113, 0.6)',  
      'rgba(34, 145, 34, 0.76)',  
      'rgba(0, 180, 0, 0.92)',    
    ],
  };
  return (
    <div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
       <strong className="white">LeetCodeCalendar</strong>
      </h1>
      <LeetCodeCalendar
        username='shiva_sangati' 
        blockSize={16}
        blockMargin={2.6} 
        fontSize={24} 
        theme={exampleTheme} 
        style={{ maxWidth: '1060px' ,marginLeft:"7%"}} 
      />
    </Row>
    </div>
  )
}
