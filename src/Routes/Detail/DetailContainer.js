import React from "react";
import DetailPresenter from "./DetailPresenter";
import { tvApi, moviesApi } from "api";
export default class extends React.Component{
    // 컴포넌트 생성

    constructor(props){
        super(props);
        const {location: {pathname}} = props;
        this.state ={
            result: null,
            error : null,
            loading : true,
            isMovie: pathname.includes("/movie/")
        };
    }
    
    // 여기에다 모든 로직 추가 (api가져오고 error 처리)

    async componentDidMount(){
        //pros를 가지고오기
        // 테스트할때는 /movie/1 으로 하면 

        console.log(this.props);

        const { 
            match: {
                params: {id}
            },
            history: {push},    // history의 push()를 가져온다
        } = this.props          // Router.js에 <Route path="/movie/:id"> :'키명'
                
        console.log(id, typeof id); // id는 String으로 들어오는걸확인(숫자인지확인 필요)
       
        const parseId = parseInt(id);   // id를 숫자타입으로 변경
        if(isNaN(parseId)){             // id가 숫자가 아니라면
           return push("/");            // 홈으로 돌린다
        }

        const { isMovie } = this.state;
        console.log(isMovie);
        
        let result = null;
        try{
            if(isMovie){
               const request = await moviesApi.movieDetail(parseId);
               console.log(request);
               result = request.data;
            }else{
               const request = await tvApi.showDetail(parseId);
               console.log(request);
               result = request.data;
            }
            console.log(result);
        }catch{
            this.setState({error: "Can't find anything."});

        }finally{
            this.setState({loading:false, result})
        }
    }

    render(){
        const { result, error, loading } = this.state;
        console.log(this.state);
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
          );
    }

}