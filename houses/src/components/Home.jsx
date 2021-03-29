import React from 'react'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
           <Banner />

           <div className = "home_selection">
           <Card 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoCyar5lj0yteuawvNRPA9-FmXt-YryeyeQ&usqp=CAU"
               title="A-1 House"
               description='This the house you can aford one Home atleast'
               price='200$' />

            <Card 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScuppPABl6jIHVzxKIvDA7M2ybVX1jFdYVA&usqp=CAU"
               title="Hulu House"
               description='This the house you can aford one Home atleast'
               price='200$' />

            <Card 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vfbpt_NgqDgvnNRtZFNV7NPd0-DRRQ4o2w&usqp=CAU"
               title='Netflix House'
               description="This is the house of entertenment"
               price='300$'/>
               </div>

              <div className = 'home_selection'>

              <Card 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRYH6JDGMfWnVuXCzlpNzZzAc0lqB_y8iyg&usqp=CAU"
               title='Netflix House'
               description="This is the house of entertenment"
               price='300$'/>

              <Card 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfmQYTrrrNM9XCD1vg-8BjPptgizpPd7gJA&usqp=CAU"
               title='Netflix House'
               description="This is the house of entertenment"
               price='300$'/>

              <Card 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77GFdOcT0L5JEYWZXTIPpAuuiSKHQHiBJ2Q&usqp=CAU"
               title='Netflix House'
               description="This is the house of entertenment"
               price='300$'/>
               </div>

               <div className ="home_selection">
               <Card 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFf2aLlBaxN53jwB6m4O_HNlvGcCVf9jiwkA&usqp=CAU"
               title='BigBoss Houce'
               description="This is the house of the fight"
               price='450$'/>

               <Card 
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9j_cpany7M7Dxc5-4_6uvVRRXYCCpCCW8Q&usqp=CAU'
               title='GOT House'
               description='This is the history of the North houses'
               price='590$'/>

              <Card 
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw9Uiza8I-CSr6mTxDiczYj-IS0sexU1guw&usqp=CAU'
               title='Snow House'
               description='This is the history of the Snow houses'
               price='899$'/>

               </div>
        </div>
    )
}

export default Home
