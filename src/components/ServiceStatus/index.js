import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

const ServiceStatus = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setStatus(!isEnabled ? "Serviço ativo" : "Serviço inativo");
    };

    const [isActive, setIsActive] = useState("Serviço inativo");

    function setStatus(status){
        setIsActive(status);
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textService}>Status do serviço</Text>
                <Text style={styles.textStatus}>{isActive}</Text>
            </View>
            <Switch
                trackColor={{ false: '#767577', true: '#c8c9cc' }}
                thumbColor={isEnabled ? '#00ff00' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginStart: 20,
        marginEnd: 20,
        marginVertical: 10,
    },
    textContainer: {
        marginRight: 10,
    },
    textService: {
        fontSize: 18,
        marginVertical: 5,
    },
    textStatus: {
        fontSize: 14,
        color: 'grey',
        fontWeight: "bold"
    }
});

export default ServiceStatus;
