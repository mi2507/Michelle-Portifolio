import React from "react";
import Card from "../Card";
import SectionTitle from "./styles/SectionTitle";
import WrapperProjects from "./styles/WrapperProjects";
import Grid from "../../foundations/layout/Grid"

export default function Projects() {
    return (   
        <WrapperProjects 
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            paddingTop="40px"
            paddingBottom="40px"
        >
            <SectionTitle>
                Meus Projetos
            </SectionTitle>
            <Grid.Container>
                <Grid.Row>
                    <Grid.Col value={{ xs: 10, md: 5, lg: 3}}>
                        <Card />
                    </Grid.Col>
                    <Grid.Col value={{ xs: 10, md: 5, lg: 3}}>
                        <Card />
                    </Grid.Col>
                    <Grid.Col value={{ xs: 10, md: 5, lg: 3}}>
                        <Card />
                    </Grid.Col>
                    <Grid.Col value={{ xs: 10, md: 5, lg: 6}}>
                        <Card />
                    </Grid.Col>
                </Grid.Row>
            </Grid.Container>    
        </WrapperProjects>
    );
}