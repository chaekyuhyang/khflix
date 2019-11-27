import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component{
    // 컴포넌트 생성
    state ={
        movieResults:null,
        tvResults:null,
        loading: false,
        searchTerm:"",
        error: null
    };
    // 여기에다 모든 로직 추가 (api가져오고 error 처리)

    handleSubmit = (event) =>{   // 제출이벤트
       console.log(event);
        event.preventDefault(); // 값을 전송할때 페이지가 새로침된다. 그럼 이때 state값이 다 초기화 되는 것을 방지

        const { searchTerm } = this.state;
        if(searchTerm !== ""){  // searchTerm이 공백이 아닌경우 searcTerm을 인자로 넣고, searchByTerm을 호출한다
            this.searchByTerm()
        }
    };

    updateTerm = (event) => {
        //console.log(event);
        const { target: {value} } = event;  // 하나의 글자만 가져옴       
        console.log(value);
        this.setState({         // 이렇게 하면 글자가 연속으로 들어옴
            searchTerm: value
        })
    }

    searchByTerm = async() => {
      const { searchTerm } = this.state;
      this.setState({loading: true});
      try{
         // throw Error();  에러 테스트
          const {data: {results: movieResults}} = await moviesApi.search(searchTerm);
          const {data: {results: tvResults}} = await tvApi.search(searchTerm);
          console.log(movieResults, tvResults);
          this.setState({movieResults, tvResults});
          console.log("여기")
      }catch{
        this.setState({error:"Can't find results."})
      }finally{
        this.setState({ loading: false });
      }
    };


    render(){
        const { movieResults, tvResults, loading, searchTerm, error } = this.state;
        console.log(this.state);
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                loading={loading}
                searchTerm={searchTerm}
                error={error}
                handleSubmit={this.handleSubmit}    // 사용자가 폼을 제출시 handleSubmit을 호출
                updateTerm={this.updateTerm}
            />
          );
    }

}