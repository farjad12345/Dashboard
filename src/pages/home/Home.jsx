import React from 'react'
import "./Home.css"
import Features from '../../components/features/Features';
import Chart from '../../components/Chart/Chart';
import { xAxisData } from '../../datas';
import WidgetSM from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
function Home() {
  return (
    <div className='home'>
<Features/>  
<Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
<div className="homeWidgets">
  <WidgetSM/>
  <WidgetLg/>
</div>
</div>
  )
}

export default Home;
