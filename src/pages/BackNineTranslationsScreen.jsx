import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BackNineHeader from '../components/BackNineHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BackNineHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'Premier L.',
          '02.04 18:30',
          'Manchester City \n' + 'Arsenal',
        )}
        {renderBroadcast(
          'La Liga',
          '05.04 20:00',
          'Real Madrid \n' + 'Atletico Madrid',
        )}
        {renderBroadcast('Serie A', '08.04 21:15', 'AC Milan \n' + 'Napoli')}
        {renderBroadcast(
          'Bundesliga',
          '11.04 19:45',
          'Bayern Munich \n' + 'Borussia Dortmund',
        )}
        {renderBroadcast(
          'Ligue 1',
          '14.04 23:00',
          'Paris Saint-Germain \n' + 'Lyon',
        )}
        {renderBroadcast('Eredivisie', '17.04 19:15', 'Ajax \n' + 'Feyenoord')}
        {renderBroadcast('Prime Liga', '20.04 16:00', 'Porto \n' + 'Benfica')}
        {renderBroadcast(
          'MLS',
          '23.04 21:30',
          'LA Galaxy \n' + 'New York Red Bulls',
        )}
        {renderBroadcast(
          'C.Libertadores',
          '26.04 17:45',
          'Flamengo \n' + 'River Plate',
        )}
        {renderBroadcast(
          'Cham. League',
          '29.04 20:45',
          'Chelsea \n' + 'Barcelona',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingVertical: 5,
  },
});
