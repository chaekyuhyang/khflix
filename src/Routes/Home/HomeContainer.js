import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api"

export default class extends React.Component{
    // 컴포넌트 생성
    state ={
        nowPlaying : null,
        upcoming : null,
        popular : null,
        error: null,
        loading: true
    };
    // 여기에다 모든 로직 추가 (api가져오고 error 처리)

    async componentDidMount(){
        // 두가지 옵션 존재
        // 1. 전체 API 요청을 여기서 할 수 있다
        // 2. 각각의 요청을 분리된 함수로 만드러서 따로 요청
        //   ex) getNowPlaying(), getUpcoming(), getPopular()...
        // 여기서는 크지 않기 때문에 componentDidMount()안에서 해결할거임

        try{
            // moviesApi.nowPlaying()으로 가져온 데이터의 data.result 부분만 nowPlaying이라는 변수에 할당
            const {data: {results: nowPlaying}} =await moviesApi.nowPlaying(); // 자바스크립트는 componentDisMount를 실행하고 nowPlaying 무비를 가져오는걸 
            console.log(nowPlaying);                        // 시작해서 Api가 리턴될 까지 기다려주지 않음 따라서 await로 api resopnse를 기다려준다
            const {data: {results: upcoming}} = await moviesApi.upcoming();
            console.log(upcoming);
            const {data: {results:popular}} = await moviesApi.popular();
            console.log(popular);

            //throw Error(); 에러 테스트 확인

            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        }catch{
            this.setState({
                error: "Cant find movies information."
            });
        }finally{
            this.setState({
                loading: false
            });
        }
        
    }


    render(){
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        console.log(this.state);
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
          );
    }

}