import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const PackageList = () => {
    return (
        <View style={styles.container}>
            <Separator />
            <View style={styles.item}>
                <Text style={styles.package}>Pacote ID: XXXXX</Text>
                <Text style={styles.timestamp}>00:00</Text>
            </View>
            <Text style={styles.syncStatus}>Pendente Sincronizar</Text>
            <Separator />
            <View style={styles.item}>
                <Text style={styles.package}>Pacote ID: XXXXX</Text>
                <Text style={styles.timestamp}>00:00</Text>
            </View>
            <Text style={styles.syncStatus}>Pendente Sincronizar</Text>
            <Separator />
            <View style={styles.item}>
                <Text style={styles.package}>Pacote ID: XXXXX</Text>
                <Text style={styles.timestamp}>00:00</Text>
            </View>
            <Text style={styles.syncStatus}>Pendente Sincronizar</Text>
            <Separator />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        fontSize: 20,
        marginHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    package: {
        fontSize: 18,
    },

    separator: {
        height: 1,
        backgroundColor: '#dde3ed',
        marginHorizontal: 20,
    },
    syncStatus: {
        fontSize: 14,
        height: 40,
        paddingTop: 5,
        marginHorizontal: 20,
        color: 'grey',
        fontWeight: "bold"
    },
    timestamp: {
        fontSize: 16,
        color: 'grey',
    },
});

export default PackageList;
