import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 0px 20px;
`;


const TVPresenter = ({ topRated, popular, airingToday, loading, error}) => 
    loading ? (<Loader />) : (
        <Container>
            {topRated && topRated.length > 0 && (  
                <Section title="Top Ratied Shows">
                    {topRated.map(show=>(
                         <Poster
                            key={show.id}
                            id={show.id} 
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating = {show.vote_average}
                            isMovie={true}
                            year={show.first_air_date.substring(0, 4)} //"yyyy-mm-dd" 중 yyyy만 추리기, release_date가 undefined경우 회피
                        />
                    ))}
                </Section>
            )}  
            {popular && popular.length > 0 && (  
                <Section title="popular Shows">
                    {popular.map(show=>(

                        <Poster
                            key={show.id}
                            id={show.id} 
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating = {show.vote_average}
                            isMovie={true}
                            year={show.first_air_date.substring(0, 4)} //"yyyy-mm-dd" 중 yyyy만 추리기, release_date가 undefined경우 회피
                        />

                    ))}
                </Section>
            )} 
            {airingToday && airingToday.length > 0 && (  
                <Section title="Airing Today">
                    {airingToday.map(show=>(
                        <Poster
                            key={show.id}
                            id={show.id} 
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating = {show.vote_average}
                            isMovie={true}
                            year={show.first_air_date.substring(0, 4)} //"yyyy-mm-dd" 중 yyyy만 추리기, release_date가 undefined경우 회피
                        />
                    ))}
                </Section>
            )}       
             {error && <Message color="#e74c3c" text={error} />} {/*에러처리*/}
        </Container>
    );

TVPresenter.propTypes ={
    topRated:PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    eorror: PropTypes.string

};

export default TVPresenter;
