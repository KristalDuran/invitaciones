import nombres from "./Logo.svg";
import calendarDate from "./Calendar.svg";
import foto from "./FotoNovios.JPG";
import anillos from "./anillos.avif";
import audio from "./AUDIO.mp3"
import lista from "./invitados.json";

export const nombre = nombres;
export const calendar = calendarDate;
export const fotoNovios = foto;
export const anillosBoda = anillos;
export const cancion = audio;
export const invitados = lista;

const defaultExport = {
    nombre,
    calendar,
    fotoNovios,
    anillosBoda,
    cancion,
    invitados
};

export default defaultExport;
