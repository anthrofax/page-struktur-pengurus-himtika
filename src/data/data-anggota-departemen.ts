// Edukasi
import mishel from "/edukasi/mishel-edukasi.png";
import haru from "/edukasi/haru-edukasi.png";
import dara from "/edukasi/dara-edukasi.png";
import dini from "/edukasi/dini-edukasi.png";
import desman from "/edukasi/desman-edukasi.png";
import eva from "/edukasi/eva-edukasi.png";
import merlin from "/edukasi/merlin-edukasi.png";
import shifa from "/edukasi/shifa-edukasi.png";
import zul from "/edukasi/zul-edukasi.png";

// Internal
import burhan from "/internal/burhan-internal.png";
import cindy from "/internal/cindy-internal.png";
import dede from "/internal/dede-internal.png";
import devi from "/internal/devi-internal.png";
import dira from "/internal/dira-internal.png";
import fitri from "/internal/fitri-internal.png";
import iqbal from "/internal/iqbal-internal.png";
import naufal from "/internal/cindy-internal.png";
import wanda from "/internal/wanda-internal.png";

// Relasi
import bergas from "/relasi/bergas-relasi.png";
import fajar from "/relasi/fajar-relasi.png";
import haliza from "/relasi/haliza-relasi.png";
import iky from "/relasi/iky-relasi.png";
import inka from "/relasi/inka-relasi.png";
import marsha from "/relasi/marsha-relasi.png";
import putra from "/relasi/putra-relasi.png";
import refa from "/relasi/refa-relasi.png";

// RnD
import abdur from "/rnd/abdur-rnd.png";
import caca from "/rnd/caca-rnd.png";
import deas from "/rnd/deas-rnd.png";
import delia from "/rnd/delia-rnd.png";
import edo from "/rnd/edo-rnd.png";
import nate from "/rnd/nate-rnd.png";
import openg from "/rnd/openg-rnd.png";
import rizki from "/rnd/rizki-rnd.png";

// Infokom
import adam from "/infokom/adam-infokom.png";
import ayu from "/infokom/ayu-infokom.png";
import chandra from "/infokom/chandra-infokom.png";
import jojo from "/infokom/jojo-infokom.png";
import kapka from "/infokom/kapka-infokom.png";
import marsya from "/infokom/marsya-infokom.png";
import puja from "/infokom/puja-infokom.png";
import wahyu from "/infokom/wahyu-infokom.png";

export const dataAnggotaDepartemen = new Map([
  [
    "Human Resource Development",
    {
      urlGambar: [dede, devi, dira, iqbal, naufal],
      jumlahAnggota: 5,
    },
  ],
  [
    "Himtika Care",
    {
      urlGambar: [fitri, burhan, cindy, wanda],
      jumlahAnggota: 4,
    },
  ],
  [
    "Public & Marketing",
    {
      urlGambar: [haliza, marsha, putra, iky],
      jumlahAnggota: 4,
    },
  ],
  [
    "Public Relation",
    {
      urlGambar: [refa, bergas, fajar, inka],
      jumlahAnggota: 4,
    },
  ],
  [
    "Product Development",
    {
      urlGambar: [edo, nate, openg, rizki],
      jumlahAnggota: 4,
    },
  ],
  [
    "Research Development",
    {
      urlGambar: [deas, abdur, delia, caca],
      jumlahAnggota: 4,
    },
  ],
  [
    "Skill Education",
    {
      urlGambar: [mishel, zul, dara, eva, shifa],
      jumlahAnggota: 5,
    },
  ],
  [
    "College Education",
    {
      urlGambar: [haru, desman, dini, merlin],
      jumlahAnggota: 4,
    },
  ],
  [
    "Media Kreatif",
    {
      urlGambar: [adam, ayu, chandra, kapka, wahyu],
      jumlahAnggota: 5,
    },
  ],
  [
    "Media Informasi",
    {
      urlGambar: [jojo, marsya, puja],
      jumlahAnggota: 3,
    },
  ],
]);
