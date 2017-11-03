import React from 'react';
import

const persons = (props) => (
    props.persons.map((person, index) => {
        return (
            <Person name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
            />
        )
    });