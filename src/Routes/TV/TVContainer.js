import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component{
    // 컴포넌트 생성
    state ={
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    };
    // 여기에다 모든 로직 추가 (api가져오고 error 처리)
    
    async componentDidMount(){   // 같은표현) 화살표 함수 표시 : componentDisMount = async() => { ... }
        try{
            //throw Error();    에러 테스트
            const {data: {results:topRated}} = await tvApi.topRated(); //
            const {data: {results:popular}} = await tvApi.popular();
            const {data: {results:airingToday}} = await tvApi.airingToday();
            console.log(topRated, popular, airingToday);
            this.setState({topRated, popular, airingToday});
        }catch{
            this.setState({
                error:" Can't find TV information."
            })

        }finally{
            this.setState({loading:false});
        }

    }

    render(){
        const { topRated, popular, airingToday, loading, error } = this.state;
        console.log(this.state)
        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
          );
    }

}