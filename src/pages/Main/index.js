import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@material-ui/core"
import {
    Snackbar, Paper, Table, TableHead, TableBody,
    TableCell, TableContainer, TableRow
} from '@material-ui/core';
import socketio from 'socket.io-client';
import { v4 as uuid } from 'uuid';

import Load from '../../components/Load';

import api from '../../services/api';
import util from '../../services/util';

import './styles.scss';

export default function Main() {
    const api_url = 'https://clima-cidade-api.herokuapp.com/'//process.env.REACT_APP_API_URL;

    const [city, setCity] = useState('');
    const [load, setLoad] = useState({ search: false, history: false, top: false });
    const [weather, setWeather] = useState({});
    const [top, setTop] = useState([]);
    const [history, setHistory] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getHistory();
        getTop();
        listenSocket();
    }, []);

    const listenSocket = async () => {
        const user_id = uuid();

        const socket = socketio(api_url, {
            query: { user_id }
        });

        socket.on('reloadHistory', response => {
            const { reload } = response;
            if (reload) {
                getHistory();
                getTop();
            }
        });
    }

    const getHistory = async () => {
        setLoad({ ...load, history: true });
        try {
            const query = await api.get(`/weather/history`);

            const { status, response } = query.data;

            if (status) setHistory(response);
            else setError(true);

        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoad({ ...load, history: false });
    }

    const getTop = async () => {
        setLoad({ ...load, top: true });
        try {
            const query = await api.get(`/weather/top`);

            const { status, response } = query.data;

            if (status) setTop(response);
            else setError(true);

        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoad({ ...load, top: false });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoad({ ...load, search: true });
        try {
            const query = await api.get(`/weather/${city}`);

            const { status, response } = query.data;
            if (status) setWeather(response);
            else setError(true);

        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoad({ ...load, search: false });
    }

    return (
        <form id="content" onSubmit={handleSubmit}>
            <div id="content-left">
                <div id="left-card">
                    <Load loading={load.search} />

                    <div id="search-card">
                        <TextField
                            autoComplete="off"
                            fullWidth
                            required
                            label="Cidade"
                            variant="filled"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />

                        <Button type="submit" variant="contained" color="primary">
                            Buscar
                        </Button>
                    </div>

                    {weather.city ?
                        <div className="weather-container">
                            <span className="weather-date">
                                {util.dateTimeToString(weather.updatedAt)}
                            </span>

                            <span className="weather-city">
                                {weather.city} - {weather.country}
                            </span>

                            <span className="weather-text weather-icon">
                                <img id="wicon" src={weather.icon} alt="Weather icon" />
                                {weather.weather}
                            </span>

                            <strong className="weather-temp">
                                {(weather.tempNow).toFixed(0)} ºC
                            </strong>

                            <div className="weather-temp-container">
                                <span className="weather-text">
                                    Mínima: {(weather.tempMin).toFixed(0)} ºC
                                </span>

                                <span className="weather-text">
                                    Máxima: {(weather.tempMax).toFixed(0)} ºC
                                </span>
                            </div>

                            <span className="weather-text">
                                Sensação térmica: {(weather.feelsLike).toFixed(0)} ºC
                            </span>

                            <span className="weather-text">
                                Humidade do ar: {weather.humidity}%
                            </span>

                            <span className="weather-text">
                                Velocidade do vento: {weather.windSpeed} m/s
                            </span>
                        </div>
                        : null}
                </div>
            </div>

            <div id="content-right">
                <span className="table-title">Cidades mais procuradas</span>
                <Load loading={load.top} />

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Posição</TableCell>
                                <TableCell align="center">Cidade</TableCell>
                                <TableCell align="right">Nº Buscas</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {top.map((el, index) => (
                                <TableRow key={el._id}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">{el.name}</TableCell>
                                    <TableCell align="right">{el.count}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <span className="table-title">Buscadas recentes</span>
                <Load loading={load.history} />

                <TableContainer component={Paper} className="table-history">
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nº</TableCell>
                                <TableCell align="center">Cidade</TableCell>
                                <TableCell align="right">Última pesquisa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {history.map((el, index) => (
                                <TableRow key={el._id}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">{el.name}</TableCell>
                                    <TableCell align="right">
                                        {util.dateTimeToString(el.updatedAt)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={error}
                onClose={() => setError(false)}
                autoHideDuration={6000}
                message="Houve um erro ao executar esta ação. Por favor, tente novamente."
            />
        </form>
    )
}