import React from "react";
import styled from "styled-components";
import CostCard from "./CostCard"
import logo1 from "./../../img/Costs1.svg"
import logo2 from "./../../img/Costs2.svg"
import logo3 from "./../../img/Costs3.svg"

const OurCosts = () => {
    const costsData = [
        {
            head: 'Beginner',
            subHead: 'Для небольшого исследования',
            img: logo1,
            price: 799,
            subPrice: 1200,
            maxPrice: 150,
            opt1: 'Безлимитная история запросов',
            opt2: 'Безопасная сделка',
            opt3: 'Поддержка 24/7',
            bg: '#FFB64F',
            active: false
        },{
            head: 'Pro',
            subHead: 'Для HR и фрилансеров',
            img: logo2,
            price: 1299,
            subPrice: 2600,
            maxPrice: 279,
            opt1: 'Все пункты тарифа Beginner',
            opt2: 'Экспорт истории',
            opt3: 'Рекомендации по приоритетам',
            bg: '#7CE3E1',
            active: false
        },{
            head: 'Business',
            subHead: 'Для корпоративных клиентов',
            img: logo3,
            price: 2379,
            subPrice: 3700,
            maxPrice: null,
            opt1: 'Все пункты тарифа Pro',
            opt2: 'Безлимитное количество запросов',
            opt3: 'Приоритетная поддержка',
            bg: '#000',
            active: true
        },
    ]
    return(
        <OurCostsWrapper>
            <div className={'ferry-text head'}>наши тарифы</div>
            {/* <Costs /> */}
            <div className="costs">
                {
                    costsData.map(e =>
                        <CostCard data={e} key={e.head}/>
                    )
                }
            </div>
        </OurCostsWrapper>
    )
}
export default OurCosts

const OurCostsWrapper = styled.div`
  .costs{
    display: flex;
    justify-content: space-between;

  @media (max-width: 1439px) {
    flex-direction: column;
  }
  }
`;
