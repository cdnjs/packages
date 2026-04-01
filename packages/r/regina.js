(function(w){
  var REGINA = {
    D1: 1,
    D2: 2,
    D3: 3,
    D4: 4,
    _d1Data: { _def: [], data: {}, length: 0 },
    _d2Data: { _def: [], data: {}, length: 0 },
    _d3Data: { _def: [], data: {}, length: 0 },
    _d4Data: { _def: [], data: {}, length: 0 },
    _test: "ALOHA",
    currentSelection: null,
    currentList: [],
    members: 0,

    select: function (id) {
      var sel = null;
      if (arguments.length === 0 || typeof id != "number") return false;

      if (id > 0 && id < 100) sel = REGINA.d1(id);
      else if (id < 10000) sel = REGINA.d2(id);
      else if (id < 10000000) sel = REGINA.d3(id);
      else if (id < 10000000000) sel = REGINA.d4(id);

      if (sel == null || sel.length == 0) return null;

      REGINA.deselect();
      REGINA.currentSelection = sel;
      REGINA.currentList = sel ? REGINA.currentSelection.children() : [];
      return REGINA.currentSelection;
    },

    deselect: function () {
      REGINA.currentList = [];
      REGINA.currentSelection = null;
    },

    addData: function (type, defs, data) {
      if (!(type == REGINA.D1 || type == REGINA.D2 || type == REGINA.D3 || type == REGINA.D4)) {
        throw new Error("Type error");
      }

      if (type == REGINA.D4) {
        // Treatmen khusus untuk D4
        var copy = {};
        for (var n in data) {
          for (var i in data[n]) {
            var key = parseInt(n.toString() + i, 10);
            copy[key] = data[n][i];
          }
        }
        data = copy;
      }

      var bank = "ABC";
      console.log(bank)
      if (type == REGINA.D1) {
        bank = REGINA._d1Data;
      } else if (type == REGINA.D2) {
        bank = REGINA._d2Data;
      } else if (type == REGINA.D3) {
        bank = REGINA._d3Data;
      } else if (type == REGINA.D4) {
        bank = REGINA._d4Data;
      }

      // 1. Create keys for the internal data
      for (var term in defs) {
        if (!bank._def.includes(defs[term])) bank._def.push(defs[term]);
      }

      // 2. Input
      for (var n in data) {
        if (data[n].length != defs.length) return;
        // if the key isn't in the internal yet, then create it
        if (bank.data[n] == undefined) {
          bank.data[n] = [];
          bank.length++;
          if (type == REGINA.D1) REGINA.members++;
        }

        for (var f in data[n]) {
          // find key index associated with data
          var index = bank._def.indexOf(defs[f]);
          if (index >= 0) bank.data[n][index] = data[n][f];
        }
      }
    },

    d1: function(arg) {
      var _def = REGINA._d1Data._def;
      var _data = REGINA._d1Data.data;

      function build(id, data) {
        var o = { id: parseInt(id, 10), _type: REGINA.D1 };
        for (var f in _def) o[_def[f]] = data[f];
        o.parent = function () {
          return null;
        };
        o.children = function () {
          return REGINA.d2(id);
        };
        return o;
      }

      if (arguments.length === 0) {
        var rs = [];
        for (var n in _data) {
          rs.push(build(n, _data[n]));
        }
        return rs;
      }

      if (typeof arg == "number") {
        if (arg < 1) return null;
        else if (arg > 0 && arg < 10) {
          var rs = [];
          for (var n in _data) {
            if (parseInt(n / 10, 10) == arg) rs.push(build(n, _data[n]));
          }
          return rs;
        } else if (arg < 100) {
          if (_data[arg]) {
            return build(arg, _data[arg]);
          }
        } else {
          var arg2 = parseInt(arg.toString().substring(0, 2), 10);
          if (_data[arg2]) {
            return build(arg2, _data[arg2]);
          }
        }
        return null;
      } else {
        var term = arg.toString().toLowerCase();

        if (term.length === 5 && term.charAt(2) == "-") {
          var isoIndex = _def.indexOf("iso");
          for (var n in _data) {
            if (_data[n][isoIndex].toLowerCase() == term) {
              return build(n, _data[n]);
            }
          }
        } else {
          var rs = [];
          if (term.length > 2) term = term.trim();
          var nameIndex = _def.indexOf("name");
          for (var n in _data) {
            var field = _data[n][nameIndex].toLowerCase();
            if (field.indexOf(term) >= 0) {
              rs.push(build(n, _data[n]));
            }
          }
          return rs;
        }
        return null;
      }
    },

    d2: function(arg) {
      var _def = REGINA._d2Data._def;
      var _data = REGINA._d2Data.data;

      function castType(arg) {
        switch (arg) {
          case 1:
            return "Kabupaten";
          case 2:
            return "Kota";
          case 3:
            return "Kabupaten Administrasi";
          case 4:
            return "Kota Administrasi";
        }
        return null;
      }

      function build(id, data) {
        var o = { id: parseInt(id, 10), _type: REGINA.D2 };
        for (var f in _def) o[_def[f]] = data[f];
        o.parent = function () {
          return REGINA.d1(parseInt(o.id / 100, 10));
        };
        o.subtype = castType(o.subtype);
        o.children = function () {
          return REGINA.d3(id);
        };
        return o;
      }

      function collect(arg, magic) {
        var rs = [];
        for (var n in _data) {
          if (parseInt(n / magic, 10) == arg) {
            rs.push(build(n, _data[n]));
          }
        }
        return rs;
      }

      if (arguments.length === 0) {
        var rs = [];
        for (var n in _data) {
          rs.push(build(n, _data[n]));
        }
        return rs;
      } else if (typeof arg == "number") {
        arg = parseInt(arg, 10); // 1208

        if (arg <= 0) return null;
        else if (arg < 10) return collect(arg, 1000);
        else if (arg < 100) return collect(arg, 100);
        else if (arg < 1000) return collect(arg, 10);
        else if (arg.toString().length >= 4) {
          // we need ony 4 digit
          var arg2 = parseInt(arg.toString().substring(0, 4), 10);
          if (_data[arg2]) {
            return build(arg2, _data[arg2]);
          }
        }
        return null;
      } else {
        var term = arg.toString().toLowerCase();
        if (term.indexOf("=") === 0) {
          var rs = [],
            subIndex = _def.indexOf("subtype");
          term = term.trim().substring(1).toLowerCase();
          for (var n in _data) {
            var cast = castType(_data[n][subIndex]).toLowerCase();
            if (cast == term) {
              rs.push(build(n, _data[n]));
            }
          }
          return rs;
        } else {
          if (term.length === 0) return null;
          if (term.length > 2) term = term.trim();
          var rs = [],
            nameIndex = _def.indexOf("name");

          for (var n in _data) {
            if (_data[n][nameIndex].toLowerCase().indexOf(term) >= 0) {
              rs.push(build(n, _data[n]));
            }
          }
          return rs;
        }
      }
    },

    d3: function(arg) {
      var _def = REGINA._d3Data._def;
      var _data = REGINA._d3Data.data;

      function build(id, data) {
        var o = { id: parseInt(id, 10), _type: REGINA.D3 };
        for (var f in _def) o[_def[f]] = data[f];
        o.parent = function () {
          return REGINA.d2(parseInt(o.id / 1000, 10));
        };
        o.children = function () {
          return REGINA.d4(id);
        };
        return o;
      }

      function collect(arg, magic) {
        var rs = [];
        for (var n in _data) {
          if (parseInt(n / magic) == arg) {
            rs.push(build(n, _data[n]));
          }
        }
        return rs;
      }

      if (arguments.length === 0) {
        var rs = [];
        for (var n in _data) {
          rs.push(build(n, _data[n]));
        }
        return rs;
      } else if (typeof arg == "number") {
        if (arg <= 0) return null;
        else if (arg < 10) return collect(arg, 1000000);
        else if (arg < 100) return collect(arg, 100000);
        else if (arg < 1000) return collect(arg, 10000);
        else if (arg < 10000) return collect(arg, 1000);
        else if (arg < 100000)
          return collect(arg, 100); // 3301090
        else if (arg < 1000000)
          return collect(arg, 10); // 1000000
        else {
          var arg2 = parseInt(arg.toString().substring(0, 7), 10);
          if (_data[arg2]) {
            return build(arg2, _data[arg2]);
          }
        }
      } else {
        var rs = [],
          term = arg.toString().toLowerCase(),
          nameIndex = _def.indexOf("name");
        for (var n in _data) {
          if (_data[n][nameIndex].toLowerCase().indexOf(term) >= 0) {
            rs.push(build(n, _data[n]));
          }
        }
        return rs;
      }
    },

    d4: function(arg) {
      var _def = REGINA._d4Data._def;
      var _data = REGINA._d4Data.data;

      function castType(t) {
        if (t == 1) return "urban";
        else if (t == 2) return "rural";
        return "?";
      }

      function build(id, data) {
        var o = { id: parseInt(id, 10), _type: REGINA.D4 };
        for (var f in _def) o[_def[f]] = data[f];
        o.parent = function () {
          return REGINA.d3(parseInt(o.id / 1000, 10));
        };
        o.children = function () {
          return [];
        };
        o.subtype = castType(o.subtype);
        return o;
      }

      // 1202020
      function collect(arg, magic) {
        var rs = [];
        for (var n in _data) {
          if (parseInt(n / magic) == arg) {
            rs.push(build(n, _data[n]));
          }
        }
        return rs;
      }

      if (arguments.length === 0) {
        var rs = [];
        for (var n in _data) {
          rs.push(build(n, _data[n]));
        }
        return rs;
      } else if (typeof arg == "number") {
        if (arg <= 0) return null;
        else if (arg < 10) return collect(arg, 1000000000);
        else if (arg < 100) return collect(arg, 100000000);
        else if (arg < 1000) return collect(arg, 10000000);
        else if (arg < 10000) return collect(arg, 1000000);
        else if (arg < 100000)
          return collect(arg, 100000); // 8101010029
        else if (arg < 1000000)
          return collect(arg, 10000); // 1000000000
        else if (arg < 10000000) return collect(arg, 1000);
        else if (arg < 100000000) return collect(arg, 100);
        else if (arg < 1000000000) return collect(arg, 10);
        else {
          var arg2 = parseInt(arg.toString().substring(0, 10), 10);
          if (_data[arg2]) {
            return build(arg2, _data[arg2]);
          }
        }
      } else {
        var rs = [],
          term = arg.toString().toLowerCase(),
          nameIndex = _def.indexOf("name");

        for (var n in _data) {
          if (_data[n][nameIndex].toLowerCase().indexOf(term) >= 0) {
            rs.push(build(n, _data[n]));
          }
        }
        return rs;
      }
    }
  };

  var _regina = {
    version: REGINA.version,
    D1: REGINA.D1,
    D2: REGINA.D2,
    D3: REGINA.D3,
    D4: REGINA.D4,
    d1: REGINA.d1,
    d2: REGINA.d2,
    d3: REGINA.d3,
    d4: REGINA.d4,
    select: REGINA.select,
    deselect: REGINA.deselect,
    addData: REGINA.addData,
    currentList: REGINA.currentList,
    currentSelection: REGINA.currentSelection,
  };

  _regina.addData(REGINA.D1, ["name", "iso", "ibukota"], {
    11: ["Aceh", "ID-AC", "Banda Aceh"],
    12: ["Sumatera Utara", "ID-SU", "Medan"],
    13: ["Sumatera Barat", "ID-SB", "Padang"],
    14: ["Riau", "ID-RI", "Pekanbaru"],
    15: ["Jambi", "ID-JA", "Jambi"],
    16: ["Sumatera Selatan", "ID-SS", "Palembang"],
    17: ["Bengkulu", "ID-BE", "Bengkulu"],
    18: ["Lampung", "ID-LA", "Bandar Lampung"],
    19: ["Kepulauan Bangka Belitung", "ID-BB", "Pangkalpinang"],
    21: ["Kepulauan Riau", "ID-KR", "Tanjungpinang"],
    31: ["Daerah Khusus Ibukota Jakarta", "ID-JK", ""],
    32: ["Jawa Barat", "ID-JB", "Bandung"],
    33: ["Jawa Tengah", "ID-JT", "Semarang"],
    34: ["Daerah Istimewa Yogyakarta", "ID-YO", "Yogyakarta"],
    35: ["Jawa Timur", "ID-JI", "Surabaya"],
    36: ["Banten", "ID-BT", "Serang"],
    51: ["Bali", "ID-BA", "Denpasar"],
    52: ["Nusa Tenggara Barat", "ID-NB", "Mataram"],
    53: ["Nusa Tenggara Timur", "ID-NT", "Kupang"],
    61: ["Kalimantan Barat", "ID-KB", "Pontianak"],
    62: ["Kalimantan Tengah", "ID-KT", "Palangka Raya"],
    63: ["Kalimantan Selatan", "ID-KS", "Banjarbaru"],
    64: ["Kalimantan Timur", "ID-KI", "Samarinda"],
    65: ["Kalimantan Utara", "ID-KU", "Tanjung Selor"],
    71: ["Sulawesi Utara", "ID-SA", "Manado"],
    72: ["Sulawesi Tengah", "ID-ST", "Palu"],
    73: ["Sulawesi Selatan", "ID-SN", "Makassar"],
    74: ["Sulawesi Tenggara", "ID-SG", "Kendari"],
    75: ["Gorontalo", "ID-GO", "Gorontalo"],
    76: ["Sulawesi Barat", "ID-SR", "Mamuju"],
    81: ["Maluku", "ID-MA", "Ambon"],
    82: ["Maluku Utara", "ID-MU", "Sofifi"],
    91: ["Papua", "ID-PA", "Jayapura"],
    92: ["Papua Barat", "ID-PB", "Manokwari"],
    93: ["Papua Selatan", "ID-PS", "Salor"],
    94: ["Papua Tengah", "ID-PT", "Wanggar"],
    95: ["Papua Pegunungan", "ID-PE", "Jayawijaya"],
    96: ["Papua Barat Daya", "ID-PD", "Sorong"],
  });

  _regina.addData(REGINA.D2, ["name", "ibukota", "subtype"], {
    1101: ["Aceh Selatan", "Tapak Tuan", 1],
    1102: ["Aceh Tenggara", "Kutacane", 1],
    1103: ["Aceh Timur", "Idi Rayeuk", 1],
    1104: ["Aceh Tengah", "Takengon", 1],
    1105: ["Aceh Barat", "Meulaboh", 1],
    1106: ["Aceh Besar", "Janthoe", 1],
    1107: ["Pidie", "Sigli", 1],
    1108: ["Aceh Utara", "Lhoksukon", 1],
    1109: ["Simeulue", "Sinabang", 1],
    1110: ["Aceh Singkil", "Singkil", 1],
    1111: ["Bireuen", "Bireuen", 1],
    1112: ["Aceh Barat Daya", "Blangpidie", 1],
    1113: ["Gayo Lues", "Blangkejeren", 1],
    1114: ["Aceh Jaya", "Calang", 1],
    1115: ["Nagan Raya", "Suka Makmue", 1],
    1116: ["Aceh Tamiang", "Karang Baru", 1],
    1117: ["Bener Meriah", "Simpang Tiga Redelong", 1],
    1118: ["Pidie Jaya", "Meureudu", 1],
    1171: ["Banda Aceh", "", 2],
    1172: ["Sabang", "", 2],
    1173: ["Lhokseumawe", "", 2],
    1174: ["Langsa", "", 2],
    1175: ["Subulussalam", "", 2],
    1201: ["Tapanuli Tengah", "Pandan", 1],
    1202: ["Tapanuli Utara", "Tarutung", 1],
    1203: ["Tapanuli Selatan", "Sipirok", 1],
    1204: ["Nias", "Gido", 1],
    1205: ["Langkat", "Stabat", 1],
    1206: ["Karo", "Kabanjahe", 1],
    1207: ["Deli Serdang", "Lubuk Pakam", 1],
    1208: ["Simalungun", "Raya", 1],
    1209: ["Asahan", "Kisaran", 1],
    1210: ["Labuhanbatu", "Rantau Prapat", 1],
    1211: ["Dairi", "Sidikalang", 1],
    1212: ["Toba", "Balige", 1],
    1213: ["Mandailing Natal", "Panyabungan", 1],
    1214: ["Nias Selatan", "Teluk Dalam", 1],
    1215: ["Pakpak Bharat", "Salak", 1],
    1216: ["Humbang Hasundutan", "Dolok Sanggul", 1],
    1217: ["Samosir", "Pangururan", 1],
    1218: ["Serdang Bedagai", "Sei Rampah", 1],
    1219: ["Batu Bara", "Lima Puluh", 1],
    1220: ["Padang Lawas Utara", "Gunung Tua", 1],
    1221: ["Padang Lawas", "Sibuhuan", 1],
    1222: ["Labuhanbatu Selatan", "Kotapinang", 1],
    1223: ["Labuhanbatu Utara", "Aek Kanopan", 1],
    1224: ["Nias Utara", "Lotu", 1],
    1225: ["Nias Barat", "Lahomi", 1],
    1271: ["Medan", "", 2],
    1272: ["Pematangsiantar", "", 2],
    1273: ["Sibolga", "", 2],
    1274: ["Tanjungbalai", "", 2],
    1275: ["Binjai", "", 2],
    1276: ["Tebing Tinggi", "", 2],
    1277: ["Padangsidimpuan", "", 2],
    1278: ["Gunungsitoli", "", 2],
    1301: ["Pesisir Selatan", "Painan", 1],
    1302: ["Solok", "Arosuka", 1],
    1303: ["Sijunjung", "Muaro Sijunjung", 1],
    1304: ["Tanah Datar", "Batusangkar", 1],
    1305: ["Padang Pariaman", "Parit Malintang", 1],
    1306: ["Agam", "Lubuk Basung", 1],
    1307: ["Lima Puluh Kota", "Sarilamak", 1],
    1308: ["Pasaman", "Lubuk Sikaping", 1],
    1309: ["Kepulauan Mentawai", "Tuapejat", 1],
    1310: ["Dharmasraya", "Pulau Punjung", 1],
    1311: ["Solok Selatan", "Padang Aro", 1],
    1312: ["Pasaman Barat", "Simpang Ampek", 1],
    1371: ["Padang", "", 2],
    1372: ["Solok", "", 2],
    1373: ["Sawahlunto", "", 2],
    1374: ["Padang Panjang", "", 2],
    1375: ["Bukittinggi", "", 2],
    1376: ["Payakumbuh", "", 2],
    1377: ["Pariaman", "", 2],
    1401: ["Kampar", "Bangkinang", 1],
    1402: ["Indragiri Hulu", "Rengat", 1],
    1403: ["Bengkalis", "Bengkalis", 1],
    1404: ["Indragiri Hilir", "Tembilahan", 1],
    1405: ["Pelalawan", "Pangkalan Kerinci", 1],
    1406: ["Rokan Hulu", "Pasir Pengaraian", 1],
    1407: ["Rokan Hilir", "Bagansiapiapi", 1],
    1408: ["Siak", "Siak Sri Indrapura", 1],
    1409: ["Kuantan Singingi", "Teluk Kuantan", 1],
    1410: ["Kepulauan Meranti", "Selatpanjang", 1],
    1471: ["Pekanbaru", "", 2],
    1472: ["Dumai", "", 2],
    1501: ["Kerinci", "Siulak", 1],
    1502: ["Merangin", "Bangko", 1],
    1503: ["Sarolangun", "Sarolangun", 1],
    1504: ["Batanghari", "Muara Bulian", 1],
    1505: ["Muaro Jambi", "Sengeti", 1],
    1506: ["Tanjung Jabung Barat", "Kuala Tungkal", 1],
    1507: ["Tanjung Jabung Timur", "Muara Sabak", 1],
    1508: ["Bungo", "Muara Bungo", 1],
    1509: ["Tebo", "Muara Tebo", 1],
    1571: ["Jambi", "", 2],
    1572: ["Sungai Penuh", "", 2],
    1601: ["Ogan Komering Ulu", "Baturaja", 1],
    1602: ["Ogan Komering Ilir", "Kayu Agung", 1],
    1603: ["Muara Enim", "Muara Enim", 1],
    1604: ["Lahat", "Lahat", 1],
    1605: ["Musi Rawas", "Muara Beliti", 1],
    1606: ["Musi Banyuasin", "Sekayu", 1],
    1607: ["Banyuasin", "Pangkalan Balai", 1],
    1608: ["Ogan Komering Ulu Timur", "Martapura", 1],
    1609: ["Ogan Komering Ulu Selatan", "Muaradua", 1],
    1610: ["Ogan Ilir", "Indralaya", 1],
    1611: ["Empat Lawang", "Tebing Tinggi", 1],
    1612: ["Penukal Abab Lematang Ilir", "Talang Ubi", 1],
    1613: ["Musi Rawas Utara", "Rupit", 1],
    1671: ["Palembang", "", 2],
    1672: ["Pagar Alam", "", 2],
    1673: ["Lubuk Linggau", "", 2],
    1674: ["Prabumulih", "", 2],
    1701: ["Bengkulu Selatan", "Manna", 1],
    1702: ["Rejang Lebong", "Curup", 1],
    1703: ["Bengkulu Utara", "Arga Makmur", 1],
    1704: ["Kaur", "Bintuhan", 1],
    1705: ["Seluma", "Tais", 1],
    1706: ["Mukomuko", "Mukomuko", 1],
    1707: ["Lebong", "Tubei", 1],
    1708: ["Kepahiang", "Kepahiang", 1],
    1709: ["Bengkulu Tengah", "Karang Tinggi", 1],
    1771: ["Bengkulu", "", 2],
    1801: ["Lampung Selatan", "Kalianda", 1],
    1802: ["Lampung Tengah", "Gunung Sugih", 1],
    1803: ["Lampung Utara", "Kotabumi", 1],
    1804: ["Lampung Barat", "Liwa", 1],
    1805: ["Tulang Bawang", "Menggala", 1],
    1806: ["Tanggamus", "Kota Agung", 1],
    1807: ["Lampung Timur", "Sukadana", 1],
    1808: ["Way Kanan", "Blambangan Umpu", 1],
    1809: ["Pesawaran", "Gedong Tataan", 1],
    1810: ["Pringsewu", "Pringsewu", 1],
    1811: ["Mesuji", "Mesuji", 1],
    1812: ["Tulang Bawang Barat", "Panaragan Jaya", 1],
    1813: ["Pesisir Barat", "Krui", 1],
    1871: ["Bandar Lampung", "", 2],
    1872: ["Metro", "", 2],
    1901: ["Bangka", "Sungai Liat", 1],
    1902: ["Belitung", "Tanjungpandan", 1],
    1903: ["Bangka Selatan", "Toboali", 1],
    1904: ["Bangka Tengah", "Koba", 1],
    1905: ["Bangka Barat", "Muntok", 1],
    1906: ["Belitung Timur", "Manggar", 1],
    1971: ["Pangkalpinang", "", 2],
    2101: ["Bintan", "Bandar Seri Bentan", 1],
    2102: ["Karimun", "Tanjung Balai Karimun", 1],
    2103: ["Natuna", "Ranai", 1],
    2104: ["Lingga", "Daik", 1],
    2105: ["Kepulauan Anambas", "Terempa", 1],
    2171: ["Batam", "", 2],
    2172: ["Tanjungpinang", "", 2],
    3101: ["Kepulauan Seribu", "Pulau Pramuka", 2],
    3171: ["Jakarta Pusat", "Menteng", 2],
    3172: ["Jakarta Utara", "Koja", 2],
    3173: ["Jakarta Barat", "Kembangan", 2],
    3174: ["Jakarta Selatan", "Kebayoran Baru", 2],
    3175: ["Jakarta Timur", "Cakung", 2],
    3201: ["Bogor", "Cibinong", 1],
    3202: ["Sukabumi", "Palabuhanratu", 1],
    3203: ["Cianjur", "Cianjur", 1],
    3204: ["Bandung", "Soreang", 1],
    3205: ["Garut", "Tarogong Kidul", 1],
    3206: ["Tasikmalaya", "Singaparna", 1],
    3207: ["Ciamis", "Ciamis", 1],
    3208: ["Kuningan", "Kuningan", 1],
    3209: ["Cirebon", "Sumber", 1],
    3210: ["Majalengka", "Majalengka", 1],
    3211: ["Sumedang", "Sumedang", 1],
    3212: ["Indramayu", "Indramayu", 1],
    3213: ["Subang", "Subang", 1],
    3214: ["Purwakarta", "Purwakarta", 1],
    3215: ["Karawang", "Karawang", 1],
    3216: ["Bekasi", "Cikarang", 1],
    3217: ["Bandung Barat", "Ngamprah", 1],
    3218: ["Pangandaran", "Parigi", 1],
    3271: ["Bogor", "", 2],
    3272: ["Sukabumi", "", 2],
    3273: ["Bandung", "", 2],
    3274: ["Cirebon", "", 2],
    3275: ["Bekasi", "", 2],
    3276: ["Depok", "", 2],
    3277: ["Cimahi", "", 2],
    3278: ["Tasikmalaya", "", 2],
    3279: ["Banjar", "", 2],
    3301: ["Cilacap", "Cilacap", 1],
    3302: ["Banyumas", "Purwokerto", 1],
    3303: ["Purbalingga", "Purbalingga", 1],
    3304: ["Banjarnegara", "Banjarnegara", 1],
    3305: ["Kebumen", "Kebumen", 1],
    3306: ["Purworejo", "Purworejo", 1],
    3307: ["Wonosobo", "Wonosobo", 1],
    3308: ["Magelang", "Mungkid", 1],
    3309: ["Boyolali", "Boyolali", 1],
    3310: ["Klaten", "Klaten", 1],
    3311: ["Sukoharjo", "Sukoharjo", 1],
    3312: ["Wonogiri", "Wonogiri", 1],
    3313: ["Karanganyar", "Karanganyar", 1],
    3314: ["Sragen", "Sragen", 1],
    3315: ["Grobogan", "Purwodadi", 1],
    3316: ["Blora", "Blora", 1],
    3317: ["Rembang", "Rembang", 1],
    3318: ["Pati", "Pati", 1],
    3319: ["Kudus", "Kudus", 1],
    3320: ["Jepara", "Jepara", 1],
    3321: ["Demak", "Demak", 1],
    3322: ["Semarang", "Ungaran", 1],
    3323: ["Temanggung", "Temanggung", 1],
    3324: ["Kendal", "Kendal", 1],
    3325: ["Batang", "Batang", 1],
    3326: ["Pekalongan", "Kajen", 1],
    3327: ["Pemalang", "Pemalang", 1],
    3328: ["Tegal", "Slawi", 1],
    3329: ["Brebes", "Brebes", 1],
    3371: ["Magelang", "", 2],
    3372: ["Surakarta", "", 2],
    3373: ["Salatiga", "", 2],
    3374: ["Semarang", "", 2],
    3375: ["Pekalongan", "", 2],
    3376: ["Tegal", "", 2],
    3401: ["Kulon Progo", "Wates", 1],
    3402: ["Bantul", "Bantul", 1],
    3403: ["Gunungkidul", "Wonosari", 1],
    3404: ["Sleman", "Sleman", 1],
    3471: ["Yogyakarta", "", 2],
    3501: ["Pacitan", "Pacitan", 1],
    3502: ["Ponorogo", "Ponorogo", 1],
    3503: ["Trenggalek", "Trenggalek", 1],
    3504: ["Tulungagung", "Tulungagung", 1],
    3505: ["Blitar", "Kanigoro", 1],
    3506: ["Kediri", "Ngasem", 1],
    3507: ["Malang", "Kepanjen", 1],
    3508: ["Lumajang", "Lumajang", 1],
    3509: ["Jember", "Jember", 1],
    3510: ["Banyuwangi", "Banyuwangi", 1],
    3511: ["Bondowoso", "Bondowoso", 1],
    3512: ["Situbondo", "Situbondo", 1],
    3513: ["Probolinggo", "Kraksaan", 1],
    3514: ["Pasuruan", "Bangli", 1],
    3515: ["Sidoarjo", "Sidoarjo", 1],
    3516: ["Mojokerto", "Mojosari", 1],
    3517: ["Jombang", "Jombang", 1],
    3518: ["Nganjuk", "Nganjuk", 1],
    3519: ["Madiun", "Caruban", 1],
    3520: ["Magetan", "Magetan", 1],
    3521: ["Ngawi", "Ngawi", 1],
    3522: ["Bojonegoro", "Bojonegoro", 1],
    3523: ["Tuban", "Tuban", 1],
    3524: ["Lamongan", "Lamongan", 1],
    3525: ["Gresik", "Gresik", 1],
    3526: ["Bangkalan", "Bangkalan", 1],
    3527: ["Sampang", "Sampang", 1],
    3528: ["Pamekasan", "Pamekasan", 1],
    3529: ["Sumenep", "Sumenep", 1],
    3571: ["Kediri", "", 2],
    3572: ["Blitar", "", 2],
    3573: ["Malang", "", 2],
    3574: ["Probolinggo", "", 2],
    3575: ["Pasuruan", "", 2],
    3576: ["Mojokerto", "", 2],
    3577: ["Madiun", "", 2],
    3578: ["Surabaya", "", 2],
    3579: ["Batu", "", 2],
    3601: ["Pandeglang", "Pandeglang", 1],
    3602: ["Lebak", "Rangkasbitung", 1],
    3603: ["Tangerang", "Tigaraksa", 1],
    3604: ["Serang", "Ciruas", 1],
    3671: ["Tangerang", "", 2],
    3672: ["Cilegon", "", 2],
    3673: ["Serang", "", 2],
    3674: ["Tangerang Selatan", "", 2],
    5101: ["Jembrana", "Negara", 1],
    5102: ["Tabanan", "Tabanan", 1],
    5103: ["Badung", "Mangupura", 1],
    5104: ["Gianyar", "Gianyar", 1],
    5105: ["Klungkung", "Semarapura", 1],
    5106: ["Bangli", "Bangli", 1],
    5107: ["Karangasem", "Amlapura", 1],
    5108: ["Buleleng", "Singaraja", 1],
    5171: ["Denpasar", "", 2],
    5201: ["Lombok Barat", "Gerung", 1],
    5202: ["Lombok Tengah", "Praya", 1],
    5203: ["Lombok Timur", "Selong", 1],
    5204: ["Sumbawa", "Sumbawa", 1],
    5205: ["Dompu", "Dompu", 1],
    5206: ["Bima", "Woha", 1],
    5207: ["Sumbawa Barat", "Taliwang", 1],
    5208: ["Lombok Utara", "Tanjung", 1],
    5271: ["Mataram", "", 2],
    5272: ["Bima", "", 2],
    5301: ["Kupang", "Oelamasi", 1],
    5302: ["Timor Tengah Selatan", "Soe", 1],
    5303: ["Timor Tengah Utara", "Kefamenanu", 1],
    5304: ["Belu", "Atambua", 1],
    5305: ["Alor", "Kalabahi", 1],
    5306: ["Flores Timur", "Larantuka", 1],
    5307: ["Sikka", "Maumere", 1],
    5308: ["Ende", "Ende", 1],
    5309: ["Ngada", "Bajawa", 1],
    5310: ["Manggarai", "Ruteng", 1],
    5311: ["Sumba Timur", "Waingapu", 1],
    5312: ["Sumba Barat", "Waikabubak", 1],
    5313: ["Lembata", "Lewoleba", 1],
    5314: ["Rote Ndao", "Baa", 1],
    5315: ["Manggarai Barat", "Labuan Bajo", 1],
    5316: ["Nagekeo", "Mbay", 1],
    5317: ["Sumba Tengah", "Waibakul", 1],
    5318: ["Sumba Barat Daya", "Tambolaka", 1],
    5319: ["Manggarai Timur", "Borong", 1],
    5320: ["Sabu Raijua", "Menia", 1],
    5321: ["Malaka", "Betun", 1],
    5371: ["Kupang", "", 2],
    6101: ["Sambas", "Sambas", 1],
    6102: ["Mempawah", "Mempawah", 1],
    6103: ["Sanggau", "Kapuas", 1],
    6104: ["Ketapang", "Ketapang", 1],
    6105: ["Sintang", "Sintang", 1],
    6106: ["Kapuas Hulu", "Putussibau", 1],
    6107: ["Bengkayang", "Bengkayang", 1],
    6108: ["Landak", "Ngabang", 1],
    6109: ["Sekadau", "Sekadau", 1],
    6110: ["Melawi", "Nanga Pinoh", 1],
    6111: ["Kayong Utara", "Sukadana", 1],
    6112: ["Kubu Raya", "Sungai Raya", 1],
    6171: ["Pontianak", "", 2],
    6172: ["Singkawang", "", 2],
    6201: ["Kotawaringin Barat", "Pangkalan Bun", 1],
    6202: ["Kotawaringin Timur", "Sampit", 1],
    6203: ["Kapuas", "Kuala Kapuas", 1],
    6204: ["Barito Selatan", "Buntok", 1],
    6205: ["Barito Utara", "Muara Teweh", 1],
    6206: ["Katingan", "Kasongan", 1],
    6207: ["Seruyan", "Kuala Pembuang", 1],
    6208: ["Sukamara", "Sukamara", 1],
    6209: ["Lamandau", "Nanga Bulik", 1],
    6210: ["Gunung Mas", "Kuala Kurun", 1],
    6211: ["Pulang Pisau", "Pulang Pisau", 1],
    6212: ["Murung Raya", "Puruk Cahu", 1],
    6213: ["Barito Timur", "Tamiang Layang", 1],
    6271: ["Palangka Raya", "", 2],
    6301: ["Tanah Laut", "Pelaihari", 1],
    6302: ["Kotabaru", "Kotabaru", 1],
    6303: ["Banjar", "Martapura", 1],
    6304: ["Barito Kuala", "Marabahan", 1],
    6305: ["Tapin", "Rantau", 1],
    6306: ["Hulu Sungai Selatan", "Kandangan", 1],
    6307: ["Hulu Sungai Tengah", "Barabai", 1],
    6308: ["Hulu Sungai Utara", "Amuntai", 1],
    6309: ["Tabalong", "Tanjung", 1],
    6310: ["Tanah Bumbu", "Batulicin", 1],
    6311: ["Balangan", "Paringin", 1],
    6371: ["Banjarmasin", "", 2],
    6372: ["Banjarbaru", "", 2],
    6401: ["Paser", "Tanah Grogot", 1],
    6402: ["Kutai Kartanegara", "Tenggarong", 1],
    6403: ["Berau", "Tanjung Redep", 1],
    6407: ["Kutai Barat", "Sendawar", 1],
    6408: ["Kutai Timur", "Sangatta", 1],
    6409: ["Penajam Paser Utara", "Penajam", 1],
    6411: ["Mahakam Ulu", "Long Bagun", 1],
    6471: ["Balikpapan", "", 2],
    6472: ["Samarinda", "", 2],
    6474: ["Bontang", "", 2],
    6501: ["Bulungan", "Tanjung Selor", 1],
    6502: ["Malinau", "Malinau", 1],
    6503: ["Nunukan", "Nunukan", 1],
    6504: ["Tana Tidung", "Tideng Pale", 1],
    6571: ["Tarakan", "", 2],
    7101: ["Bolaang Mongondow", "Lolak", 1],
    7102: ["Minahasa", "Tondano", 1],
    7103: ["Kepulauan Sangihe", "Tahuna", 1],
    7104: ["Kepulauan Talaud", "Melonguane", 1],
    7105: ["Minahasa Selatan", "Amurang", 1],
    7106: ["Minahasa Utara", "Airmadidi", 1],
    7107: ["Minahasa Tenggara", "Ratahan", 1],
    7108: ["Bolaang Mongondow Utara", "Boroko", 1],
    7109: ["Kepulauan Siau Tagulandang Biaro", "Ondong Siau", 1],
    7110: ["Bolaang Mongondow Timur", "Tutuyan", 1],
    7111: ["Bolaang Mongondow Selatan", "Bolaang Uki", 1],
    7171: ["Manado", "", 2],
    7172: ["Bitung", "", 2],
    7173: ["Tomohon", "", 2],
    7174: ["Kotamobagu", "", 2],
    7201: ["Banggai", "Luwuk", 1],
    7202: ["Poso", "Poso", 1],
    7203: ["Donggala", "Banawa", 1],
    7204: ["Tolitoli", "Baolan", 1],
    7205: ["Buol", "Buol", 1],
    7206: ["Morowali", "Bungku", 1],
    7207: ["Banggai Kepulauan", "Salakan", 1],
    7208: ["Parigi Moutong", "Parigi", 1],
    7209: ["Tojo Una Una", "Ampana", 1],
    7210: ["Sigi", "Sigi Biromaru", 1],
    7211: ["Banggai Laut", "Banggai", 1],
    7212: ["Morowali Utara", "Kolonodale", 1],
    7271: ["Palu", "", 2],
    7301: ["Kepulauan Selayar", "Benteng", 1],
    7302: ["Bulukumba", "Ujung Bulu", 1],
    7303: ["Bantaeng", "Bantaeng", 1],
    7304: ["Jeneponto", "Bontosunggu", 1],
    7305: ["Takalar", "Pattallassang", 1],
    7306: ["Gowa", "Sungguminasa", 1],
    7307: ["Sinjai", "Sinjai", 1],
    7308: ["Bone", "Watampone", 1],
    7309: ["Maros", "Turikale", 1],
    7310: ["Pangkajene Dan Kepulauan", "Pangkajene", 1],
    7311: ["Barru", "Barru", 1],
    7312: ["Soppeng", "Watansoppeng", 1],
    7313: ["Wajo", "Sengkang", 1],
    7314: ["Sidenreng Rappang", "Pangkajene Sidenreng", 1],
    7315: ["Pinrang", "Watang Sawitto", 1],
    7316: ["Enrekang", "Enrekang", 1],
    7317: ["Luwu", "Belopa", 1],
    7318: ["Tana Toraja", "Makale", 1],
    7322: ["Luwu Utara", "Masamba", 1],
    7324: ["Luwu Timur", "Malili", 1],
    7326: ["Toraja Utara", "Rantepao", 1],
    7371: ["Makassar", "", 2],
    7372: ["Parepare", "", 2],
    7373: ["Palopo", "", 2],
    7401: ["Kolaka", "Kolaka", 1],
    7402: ["Konawe", "Unaaha", 1],
    7403: ["Muna", "Raha", 1],
    7404: ["Buton", "Pasarwajo", 1],
    7405: ["Konawe Selatan", "Andoolo", 1],
    7406: ["Bombana", "Rumbia", 1],
    7407: ["Wakatobi", "Wangi-Wangi", 1],
    7408: ["Kolaka Utara", "Lasusua", 1],
    7409: ["Konawe Utara", "Wanggudu", 1],
    7410: ["Buton Utara", "Buranga", 1],
    7411: ["Kolaka Timur", "Tirawuta", 1],
    7412: ["Konawe Kepulauan", "Langara", 1],
    7413: ["Muna Barat", "Sawerigadi", 1],
    7414: ["Buton Tengah", "Lakudo", 1],
    7415: ["Buton Selatan", "Batauga", 1],
    7471: ["Kendari", "", 2],
    7472: ["Baubau", "", 2],
    7501: ["Gorontalo", "Limboto", 1],
    7502: ["Boalemo", "Tilamuta", 1],
    7503: ["Bone Bolango", "Suwawa", 1],
    7504: ["Pohuwato", "Marisa", 1],
    7505: ["Gorontalo Utara", "Kwandang", 1],
    7571: ["Gorontalo", "", 2],
    7601: ["Pasangkayu", "Pasangkayu", 1],
    7602: ["Mamuju", "Mamuju", 1],
    7603: ["Mamasa", "Mamasa", 1],
    7604: ["Polewali Mandar", "Polewali", 1],
    7605: ["Majene", "Banggae", 1],
    7606: ["Mamuju Tengah", "Tobadak", 1],
    8101: ["Maluku Tengah", "Masohi", 1],
    8102: ["Maluku Tenggara", "Langgur", 1],
    8103: ["Kepulauan Tanimbar", "Saumlaki", 1],
    8104: ["Buru", "Namlea", 1],
    8105: ["Seram Bagian Timur", "Bula", 1],
    8106: ["Seram Bagian Barat", "Piru", 1],
    8107: ["Kepulauan Aru", "Dobo", 1],
    8108: ["Maluku Barat Daya", "Tiakur", 1],
    8109: ["Buru Selatan", "Namrole", 1],
    8171: ["Ambon", "", 2],
    8172: ["Tual", "", 2],
    8201: ["Halmahera Barat", "Jailolo", 1],
    8202: ["Halmahera Tengah", "Weda", 1],
    8203: ["Halmahera Utara", "Tobelo", 1],
    8204: ["Halmahera Selatan", "Labuha", 1],
    8205: ["Kepulauan Sula", "Sanana", 1],
    8206: ["Halmahera Timur", "Maba", 1],
    8207: ["Pulau Morotai", "Morotai Selatan", 1],
    8208: ["Pulau Taliabu", "Bobong", 1],
    8271: ["Ternate", "", 2],
    8272: ["Tidore Kepulauan", "", 2],
    9103: ["Jayapura", "Sentani", 1],
    9105: ["Kepulauan Yapen", "Serui", 1],
    9106: ["Biak Numfor", "Biak", 1],
    9110: ["Sarmi", "Sarmi", 1],
    9111: ["Keerom", "Waris", 1],
    9115: ["Waropen", "Oudate", 1],
    9119: ["Supiori", "Sorendiweri", 1],
    9120: ["Mamberamo Raya", "Burmeso", 1],
    9171: ["Jayapura", "", 2],
    9202: ["Manokwari", "Manokwari", 1],
    9203: ["Fakfak", "Fakfak", 1],
    9206: ["Teluk Bintuni", "Bintuni", 1],
    9207: ["Teluk Wondama", "Rasiei", 1],
    9208: ["Kaimana", "Kaimana", 1],
    9211: ["Manokwari Selatan", "Ransiki", 1],
    9212: ["Pegunungan Arfak", "Anggi", 1],
    9301: ["Merauke", "Merauke", 1],
    9302: ["Boven Digoel", "Tanah Merah", 1],
    9303: ["Mappi", "Kepi", 1],
    9304: ["Asmat", "Agats", 1],
    9401: ["Nabire", "Nabire", 1],
    9402: ["Puncak Jaya", "Mulia", 1],
    9403: ["Paniai", "Enarotali", 1],
    9404: ["Mimika", "Timika", 1],
    9405: ["Puncak", "Ilaga", 1],
    9406: ["Dogiyai", "Kigamani", 1],
    9407: ["Intan Jaya", "Sugapa", 1],
    9408: ["Deiyai", "Tigi", 1],
    9501: ["Jayawijaya", "Wamena", 1],
    9502: ["Pegunungan Bintang", "Oksibil", 1],
    9503: ["Yahukimo", "Sumohai", 1],
    9504: ["Tolikara", "Karubaga", 1],
    9505: ["Mamberamo Tengah", "Kobagma", 1],
    9506: ["Yalimo", "Elelim", 1],
    9507: ["Lanny Jaya", "Tiom", 1],
    9508: ["Nduga", "Kenyam", 1],
    9601: ["Sorong", "Aimas", 1],
    9602: ["Sorong Selatan", "Teminabuan", 1],
    9603: ["Raja Ampat", "Waisai", 1],
    9604: ["Tambrauw", "Fef", 1],
    9605: ["Maybrat", "Kumurkek", 1],
    9671: ["Sorong", "", 2],
  });

  if (w.regina) throw new Error("Sudah ada regina");
  w.regina = _regina;
})(window)
