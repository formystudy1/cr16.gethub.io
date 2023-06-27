const App ={
    data(){
        return{
            deta: Date.now(),
            //данные для регистрации и авторизации
            nname: '',
            fname: '',
            oname: '',
            login: '',
            password: '',
            phone: '',
            pol: '',
            statuss: '',

            //статус для разных окон
            status_now:'',

            //данные для сортировки
            selectOption:"",
            sortOption:[
                {value: '1', name:'Дружба'},
                {value: '2', name:'Солнышко'},
                {value: '3', name:'Жемчужинка'},
                {value: '4', name:'Осьминожка'},
                {value: '5', name:'Капельки'},
                {value: '6', name:'Черепашки'},
                {value: '7', name:'Лучики'},
                {value: '8', name:'Улыбка'},
                {value: '9', name:'Золотая рыбка'},
                {value: '10', name:'Крабики'},
                {value: '11', name:'Морячки'},
                {value: '12', name:'Дельфинчики'},
                {value: '14', name:'Звездочки'},
            ],

            //данные для поисковой строчки
            searchValue:'',

            //список детей
            child_gruos: {
                druzba: [{id: 1, familiyaa: 'Рябченок', namee: "Антон", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 2, familiyaa: 'Петухов', namee: "Лев", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 3, familiyaa: 'Азмимов', namee: "Сергей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 4, familiyaa: 'Кротова', namee: "Алла", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 5, familiyaa: 'Попов', namee: "Арсений", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 6, familiyaa: 'Иванов', namee: "Иван", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 7, familiyaa: 'Белякова', namee: "Светлана", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 8, familiyaa: 'Волков', namee: "Антон", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 9, familiyaa: 'Воряг', namee: "Анастасия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 10, familiyaa: 'Груднов', namee: "Николай", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 11, familiyaa: 'Гончаров', namee: "Анатолий", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 12, familiyaa: 'Доброва', namee: "Валерия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 13, familiyaa: 'Добров', namee: "Павел", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 14, familiyaa: 'Игровая', namee: "Александра", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 15, familiyaa: 'Смирнов', namee: "Иван", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 16, familiyaa: 'Марченко', namee: "Александр", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 17, familiyaa: 'Нагорный', namee: "Никита", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                solnishko:[
                    {id: 18, familiyaa: 'Персикова', namee: "Инга",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 19, familiyaa: 'Леонова', namee: "София", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 20, familiyaa: 'Логинова', namee: "Елизовета", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 21, familiyaa: 'Грачева', namee: "Анна",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 22, familiyaa: 'Плотников', namee: "Павел",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 23, familiyaa: 'Денисов', namee: "Даниил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 24, familiyaa: 'Соколова', namee: "Варвара", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 25, familiyaa: 'Журавлева', namee: "Мирослава", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 26, familiyaa: 'Судаков', namee: "Илья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 27, familiyaa: 'Демьянов', namee: "Алексай", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 28, familiyaa: 'Данилова', namee: "Полина",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 29, familiyaa: 'Зубова', namee: "Елизовета", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 30, familiyaa: 'Анисимов', namee: "Глеб", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 31, familiyaa: 'Крылов', namee: "Михаил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 32, familiyaa: 'Голубев', namee: "Марк",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                zhemchuzhina:[
                    {id: 33, familiyaa: 'Зуев', namee: "Артем", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 34, familiyaa: 'Смирнова', namee: "Мария", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 35, familiyaa: 'Пономарева', namee: "Мирослава", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 36, familiyaa: 'Лаврова', namee: "Полина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 37, familiyaa: 'Дьяконова', namee: "Софья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 38, familiyaa: 'Денисова', namee: "Александр", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 39, familiyaa: 'Марков', namee: "Давид", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 40, familiyaa: 'Минаева', namee: "Ксения", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 41, familiyaa: 'Кузьмин', namee: "Илья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 42, familiyaa: 'Яковлев', namee: "Арсений", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 43, familiyaa: 'Цветкова', namee: "Полина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 44, familiyaa: 'Николаева', namee: "Елизовета", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 45, familiyaa: 'Рыжов', namee: "Богдан", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 46, familiyaa: 'Любимова', namee: "Арина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 47, familiyaa: 'Лукьянова', namee: "Василиса", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 48, familiyaa: 'Яковлева', namee: "Софья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 49, familiyaa: 'Медведева', namee: "Виктория", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 50, familiyaa: 'Воробьев', namee: "Максим", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 51, familiyaa: 'Титов', namee: "Денис", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 52, familiyaa: 'Левин', namee: "Никита", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 53, familiyaa: 'Кузьмин', namee: "Мирон", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 54, familiyaa: 'Кузнецов', namee: "Игорь", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                osminozhka:[
                    {id: 333, familiyaa: 'Волкова', namee: "Александра", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 344, familiyaa: 'Афнасьева', namee: "Мария", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 355, familiyaa: 'Афанасьева', namee: "Елизовета", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 366, familiyaa: 'Архипова', namee: "Александра", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 377, familiyaa: 'Агеева', namee: "Василий", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 388, familiyaa: 'Кузнецова', namee: "Ксения", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 399, familiyaa: 'Севастьянов', namee: "Даниэль", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 400, familiyaa: 'Рожков', namee: "Михаил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 411, familiyaa: 'Хромова', namee: "Алиса", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 422, familiyaa: 'Басова', namee: "Елизовета", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 433, familiyaa: 'Беляева', namee: "Дарья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 444, familiyaa: 'Шевелев', namee: "Никита", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 455, familiyaa: 'Павлова ', namee: "Миросалава", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 466, familiyaa: 'Одинцова', namee: "Владимир", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 477, familiyaa: 'Миронова', namee: "София", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 488, familiyaa: 'Максимова', namee: "Александра", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 499, familiyaa: 'Исаева', namee: "Алиса", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 500, familiyaa: 'Гущина', namee: "Мария", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 511, familiyaa: 'Серова', namee: "Виктория", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 522, familiyaa: 'Филлипова', namee: "Евгения", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 533, familiyaa: 'Левин', namee: "Михаил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 544, familiyaa: 'Васильева', namee: "Светослава", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                kapelki: [{id: 55, familiyaa: 'Селиванов', namee: "Лев", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 56, familiyaa: 'Орлов', namee: "Иван", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 57, familiyaa: 'Соловьева', namee: "Дарья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 58, familiyaa: 'Фролова', namee: "Виктория", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 59, familiyaa: 'Гордеева', namee: "Алина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 60, familiyaa: 'Дроздова', namee: "Мия",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 61, familiyaa: 'Калачев', namee: "Лев", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 62, familiyaa: 'Герасимова', namee: "Анна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 63, familiyaa: 'Владимиров', namee: "Кирилл", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 64, familiyaa: 'Александрова', namee: "Мария", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 65, familiyaa: 'Яковлева', namee: "Дарья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 66, familiyaa: 'Игнатьева', namee: "Александра", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 67, familiyaa: 'Ершова', namee: "Анна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 68, familiyaa: 'Герасимов', namee: "Иван", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 69, familiyaa: 'Фокина', namee: "Екатерина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 70, familiyaa: 'Иванов', namee: "Егор", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 71, familiyaa: 'Мальцев', namee: "Данила", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                cherepashki: [{id: 72, familiyaa: 'Корчагина', namee: "Диана", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 73, familiyaa: 'Лопатина', namee: "Екатерина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 74, familiyaa: 'Моисеев', namee: "Денис", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 75, familiyaa: 'Ермолаева', namee: "Василина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 77, familiyaa: 'Яковлев', namee: "Лев", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 78, familiyaa: 'Мельникова', namee: "Василина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 79, familiyaa: 'Щербакова', namee: "Анна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 80, familiyaa: 'Михайлов', namee: "Федор", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 81, familiyaa: 'Корчагин', namee: "Даниил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 82, familiyaa: 'Колесникова', namee: "Дарья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 83, familiyaa: 'Захарова', namee: "Виктория", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 84, familiyaa: 'Попова', namee: "Александра", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 85, familiyaa: 'Афанасьева', namee: "Вероника", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 86, familiyaa: 'Покровский', namee: "Арсений",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 87, familiyaa: 'Нечаев', namee: "Николай", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 88, familiyaa: 'Галкина', namee: "Амина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 89, familiyaa: 'Воробьева', namee: "Валерий", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 90, familiyaa: 'Тимофеев', namee: "Роман", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 91, familiyaa: 'Онищенков', namee: "Тимофей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                luchiki: [{id: 92, familiyaa: 'Суворов', namee: "Даниил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 93, familiyaa: 'Яковлева', namee: "Валерия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 94, familiyaa: 'Яковлева', namee: "Вероника", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 95, familiyaa: 'Иванова', namee: "Анастасия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 96, familiyaa: 'Акимов', namee: "Платон", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 97, familiyaa: 'Шастун', namee: "София", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 98, familiyaa: 'Михеев', namee: "Тимофей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 99, familiyaa: 'Фокина', namee: "Злата", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 100, familiyaa: 'Максимова', namee: "Мелания", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 101, familiyaa: 'Морозова', namee: "Стефания", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 102, familiyaa: 'Зиновьева', namee: "Анна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 103, familiyaa: 'Панина', namee: "Амина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 104, familiyaa: 'Нефедов', namee: "Роман", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 105, familiyaa: 'Филиппова', namee: "Арина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 106, familiyaa: 'Афанасьева', namee: "Дарья",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 107, familiyaa: 'Антонова', namee: "Таисия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 108, familiyaa: 'Матвиенко', namee: "Сергей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 109, familiyaa: 'Колесникова', namee: "Ульянова", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 110, familiyaa: 'Моргунова', namee: "Арина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 111, familiyaa: 'Антонов', namee: "Денис", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                ulibka: [{id:112, familiyaa: 'Волкова', namee: "Валерия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 113, familiyaa: 'Данилова', namee: "Александра", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 114, familiyaa: 'Тимофеева', namee: "Елизовета", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 115, familiyaa: 'Грачев', namee: "Савелий", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 116, familiyaa: 'Наумова', namee: "Ульяна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 117, familiyaa: 'Фокин', namee: "Вероника", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 118, familiyaa: 'Андреев', namee: "Алексей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 119, familiyaa: 'Медведев', namee: "Николай", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 120, familiyaa: 'Николева', namee: "Мария", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 121, familiyaa: 'Клюева', namee: "Диана", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 122, familiyaa: 'Исаева', namee: "Георгий", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 123, familiyaa: 'Панов', namee: "Владимир", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 124, familiyaa: 'Русакова', namee: "Алиса", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 125, familiyaa: 'Петорв', namee: "Кирилл", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 126, familiyaa: 'Макарова', namee: "Анна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 127, familiyaa: 'Аксенов', namee: "Даниил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 128, familiyaa: 'Семенова', namee: "Милана", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 129, familiyaa: 'Позов', namee: "Захар", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 130, familiyaa: 'Васильев', namee: "Михаил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 131, familiyaa: 'Никулин', namee: "Антон", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                zoloto: [{id:132, familiyaa: 'Цветков', namee: "Федор", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 133, familiyaa: 'Демина', namee: "Есения", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 134, familiyaa: 'Анисимова', namee: "Амина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 135, familiyaa: 'Балашова', namee: "Алена", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 136, familiyaa: 'Тарасов', namee: "Даниил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 137, familiyaa: 'Казаков', namee: "Андрей",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 138, familiyaa: 'Мельникова', namee: "Вероника", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 139, familiyaa: 'Корнилов', namee: "Тимофей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 140, familiyaa: 'Савельев', namee: "Григорий",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 141, familiyaa: 'Гонаров', namee: "Николай", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 142, familiyaa: 'Борисова', namee: "Софья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 143, familiyaa: 'Костина', namee: "Дарина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 144, familiyaa: 'Белоусов', namee: "Всеволод", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 145, familiyaa: 'Лебедев', namee: "Леон", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 146, familiyaa: 'Малинин', namee: "Платон", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 147, familiyaa: 'Белкин', namee: "Ярослав", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 148, familiyaa: 'Чернов', namee: "Мирон",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 149, familiyaa: 'Суханова', namee: "София", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 150, familiyaa: 'Егоров', namee: "Ярослав", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 151, familiyaa: 'Белова', namee: "Алиса", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 152, familiyaa: 'Воробьева', namee: "Варвара", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 153, familiyaa: 'Юдин', namee: "Родион", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 154, familiyaa: 'Шевелева', namee: "Амелия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 155, familiyaa: 'Андрианова', namee: "Анна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 156, familiyaa: 'Молоков', namee: "Павел", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                krabiki:[
                    {id: 157, familiyaa: 'Софронова', namee: "Кристина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 158, familiyaa: 'Уварова', namee: "Татьяна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 159, familiyaa: 'Соколов', namee: "Даниил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 160, familiyaa: 'Крюкова', namee: "Эмилия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 161, familiyaa: 'Шубина', namee: "Анастасия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 162, familiyaa: 'Александрова', namee: "Любовь", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 163, familiyaa: 'Лебедева', namee: "Елизовета", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 164, familiyaa: 'Михеев', namee: "Эмиль", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 165, familiyaa: 'Никитина', namee: "София", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 166, familiyaa: 'Кулакова', namee: "Кира",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 167, familiyaa: 'Павлова', namee: "Ксения", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 168, familiyaa: 'Толкачев', namee: "Артур", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 169, familiyaa: 'Румянцев', namee: "Алексей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 170, familiyaa: 'Мельников', namee: "Илья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 171, familiyaa: 'Громова', namee: "Алена", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                morychki: [{id: 172, familiyaa: 'Богданова', namee: "Ольга",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 173, familiyaa: 'Кузьмина', namee: "Алия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 174, familiyaa: 'Медведев', namee: "Максим", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 175, familiyaa: 'Мельников', namee: "Мирон",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 176, familiyaa: 'Титов', namee: "Ян", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 177, familiyaa: 'Озерова', namee: "Анна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 178, familiyaa: 'Волков', namee: "Артем", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 179, familiyaa: 'Серова', namee: "Злата", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 180, familiyaa: 'Смирнова', namee: "Георгий", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 181, familiyaa: 'Журавлев', namee: "Федор", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 182, familiyaa: 'Терентьева', namee: "Кристина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 183, familiyaa: 'Худяков', namee: "Кирилл",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 184, familiyaa: 'Капустин', namee: "Семен", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 185, familiyaa: 'Кузнецов', namee: "Алексей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 186, familiyaa: 'Седов', namee: "Тигран", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 187, familiyaa: 'Сорокина', namee: "Амина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 189, familiyaa: 'Толкачев', namee: "Матвей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                delfinchiki: [{id: 190, familiyaa: 'Анохина', namee: "Валерия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 191, familiyaa: 'Харитонов', namee: "Петр", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 192, familiyaa: 'Игнатов', namee: "Григорий", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 193, familiyaa: 'Медведев', namee: "Глеб", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 194, familiyaa: 'Суворов', namee: "Алексей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 195, familiyaa: 'Елисеев', namee: "Гордей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 196, familiyaa: 'Серебрякова', namee: "Михаил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 197, familiyaa: 'Вавилова', namee: "Вероника", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 198, familiyaa: 'Ефимова', namee: "Таисия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 199, familiyaa: 'Пименов', namee: "Макисм",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 200, familiyaa: 'Демидов', namee: "Захар", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 201, familiyaa: 'Волгина', namee: "Карина",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 202, familiyaa: 'Соловьева', namee: "Виктория", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 203, familiyaa: 'Давыдова', namee: "Ева", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 204, familiyaa: 'Соколова', namee: "Варвара", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 205, familiyaa: 'Рябинина', namee: "Анастасия",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 206, familiyaa: 'Сазонова', namee: "София", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 207, familiyaa: 'Меркулова', namee: "Дарья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 208, familiyaa: 'Борисова', namee: "Виктория", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
                zvezdochki: [{id: 209, familiyaa: 'Ковалев', namee: "Алексей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 210, familiyaa: 'Кожевникова', namee: "Александра",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 211, familiyaa: 'Петрова', namee: "Татьяна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 212, familiyaa: 'Григорьева', namee: "Анастасия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 213, familiyaa: 'Малышев', namee: "Семен", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 214, familiyaa: 'Колесова', namee: "Валерия", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 215, familiyaa: 'Громова', namee: "Алина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 216, familiyaa: 'Громов', namee: "Ева", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 217, familiyaa: 'Морозова', namee: "Диана", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 218, familiyaa: 'Литвинов', namee: "Матвей", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 219, familiyaa: 'Тарантьева', namee: "Евгения", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 220, familiyaa: 'Бобров', namee: "Егор",otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 221, familiyaa: 'Константинова', namee: "Арина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 222, familiyaa: 'Козыроева', namee: "Яна", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 223, familiyaa: 'Егорова', namee: "Егор", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 224, familiyaa: 'Смирнова', namee: "Софья", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 225, familiyaa: 'Злобин', namee: "Егор", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 226, familiyaa: 'Аксенов', namee: "Михаил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 227, familiyaa: 'Сидоров', namee: "Даниил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 228, familiyaa: 'Голованов', namee: "Владимир", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 229, familiyaa: 'Романова', namee: "Майя", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 230, familiyaa: 'Логинова', namee: "Ирина", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                    {id: 231, familiyaa: 'Маркин', namee: "Михаил", otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'}
                ],
            },

            //для ранения сортированного списка
            sortedSpisok:[],

            //данные для закрытия/открытия окон
            red_avt_h: false,
            spisok_h: true,
            openAvt: false,
            openReg:false,
            flag:1,
            openAdd:false,


            //данные для присутствия и отсутсвия детей
            schetchik:[],
            yvazh:[],
            neyvazh:[],
            index:'',
            otmetka:[],
            for_otchet:[],
            pris:'',
            yvazhit:'',
            neyvazhit:'',
            vsego_detey:1,

            //данные для добавления и удаления нового ребенка
            valuename:'',
            valuefamil:'',
            index_child:'',

            //    данные для отчета
            otmetka_status:'-',
            flag_othcet:0,

            // надо подумать
            otchet_grups:[
                {value: '1', name:'Дружба',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '2', name:'Солнышко',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '3', name:'Жемчужинка',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '4', name:'Осьминожка',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '5', name:'Капельки',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '6', name:'Черепашки',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '7', name:'Лучики',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '8', name:'Улыбка',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '9', name:'Золотая рыбка',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '10', name:'Крабики',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '11', name:'Морячки',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '12', name:'Дельфинчики',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
                {value: '14', name:'Звездочки',otmetka_vos:'-', otmetka_logo:'-', otmetka_psiho:'-', otmetka_inst_s:'-', otmetka_inst_z:'-', otmetka_muz:'-'},
            ],
        }
    },
    methods:{
        //открытие окна авторизации
        openDialogAvto(){
            this.openAvt=true
            this.openReg=false
        },
        //отерытие онка реистрации
        openDialogreg(){
            this.openReg=true
            this.openAvt=  false
        },
        openDialogAdd(){
            this.openAdd = true
        },
        //хакрытие окон
        close(){
            this.openAvt=false
            this.openReg=false
            this.openAdd=false
        },
        exit(){
            this.selectOption=''
            this.red_avt_h=false
            this.spisok_h=true
            this.openAvt=false
            this.openReg=false
            this.openAdd=false
            this.status_now=''
            this.login=''
            this.password=''
            this.otmetka=[]
            this.schetchik=[]
            this.yvazh=[]
            this.neyvazh=[]
        },
        //автризация
        avto() {
            let userAuto; // для хранения найденного пользователя
            for (let i=0; i<localStorage.length; i++) {
                const key = localStorage.key(i); // получение ключа
                const value = localStorage[key];  // получение значения по ключу
                let user = JSON.parse(value); // переводим в объект найденного пользователя
                if (user.login==this.login && user.password==this.password) {
                    userAuto=user
                    alert('авторизация прошла успешно')
                    this.spisok_h = false
                    this.red_avt_h = true
                    this.status_now = user.status
                    break

                }
            }
            // если пользователь не найден (userAuto не заполнено)
            if (!userAuto) {
                alert("не найден пользователь");
            }
            this.openAvto = false;// закрываем окно авторизации


        },
        //регистрация
        reg() {
            let key = Date.now(); // создание ключа
            // создаем объект
            const user = {
                name: this.nname,
                familiya: this.fname,
                otchestvo: this.oname,
                login: this.login,
                password: this.password,
                phone: this.phone,
                pol: this.pol,
                status: this.statuss
            }
            // помещаем объект в хранилище
            localStorage.setItem(key.toString(), JSON.stringify(user));
            this.login=''
            this.password=''
            this.oname=''
            this.fname=''
            this.nname=''
            this.phone=''
            this.pol=''
            this.statuss=''
            this.openReg = false; // закрываем окно регистрации
        },
        //отмечает воспитатель
        plus(person){
            this.schetchik.push(person.id)
            this.otmetka.push(person.id)


        },
        //отмечает воспитатель
        yvazh_f(person){
            this.yvazh.push(person.id)
            this.otmetka.push(person.id)

        },
        //отмечает воспитатель
        neyvazh_f(person){
            this.neyvazh.push(person.id)
            this.otmetka.push(person.id)

        },
        //отмечает воспитатель
        otmena(person){
            this.index=this.schetchik.indexOf(person.id)
            if(this.index===-1){
                this.index=this.yvazh.indexOf(person.id)
                if(this.index===-1){
                    this.index=this.neyvazh.indexOf(person.id)
                    this.neyvazh.splice(this.index,1)
                }
                else{
                    this.yvazh.splice(this.index,1)
                }
            }
            else{
                this.schetchik.splice(this.index,1)
            }
            this.index = this.otmetka.indexOf(person.id)
            this.otmetka.splice(this.index,1)
        },
        //сохранение отмеченных детей
        save(){
            let key=1
            this.pris = this.schetchik.join(' ')
            this.yvazhit = this.yvazh.join(' ')
            this.neyvazhit = this.neyvazh.join(' ')
            if (this.status_now==='zav'){
                key = this.selectOption+'1'
            }
            else if(this.status_now==='logoped'){
                key = this.selectOption+'!'
                this.flag=0
            }
            else if(this.status_now==='psiho'){
                key = this.selectOption+'@'
                this.flag=0
            }
            else if(this.status_now==='fiz_zal'){
                key = this.selectOption+'#'
                this.flag=0
            }
            else if(this.status_now==='fiz_bas'){
                key = this.selectOption+'$'
                this.flag=0
            }
            else if(this.status_now==='muz'){
                key = this.selectOption+'%'
                this.flag=0
            }
            else if(this.status_now==='vos'){
                key = this.selectOption+'^'
            }
            else if(this.status_now==='star_vos'){
                key = this.selectOption+'8'
            }
            const otchet={
                prisutstvut:this.pris,
                yvazhitelnaya:this.yvazhit,
                neyvazhitelnaya:this.neyvazhit
            }
            sessionStorage.setItem(key.toString(),JSON.stringify(otchet))
            this.schetchik =[]
            this.yvazh =[]
            this.neyvazh=[]
            this.flag=0
        },
        //
        save_kol(){
            if (this.selectOption==='1'){
                this.vsego_detey = 17
            }
            if (this.selectOption==='2'){
                this.vsego_detey = 15
            }
            if (this.selectOption==='3'){
                this.vsego_detey = 22
            }
            if (this.selectOption==='4'){
                this.vsego_detey = 22
            }
            if (this.selectOption==='5'){
                this.vsego_detey = 17
            }
            if (this.selectOption==='6'){
                this.vsego_detey = 19
            }
            if (this.selectOption==='7'){
                this.vsego_detey = 20
            }
            if (this.selectOption==='8'){
                this.vsego_detey = 20
            }
            if (this.selectOption==='9'){
                this.vsego_detey = 25
            }
            if (this.selectOption==='10'){
                this.vsego_detey = 15
            }
            if (this.selectOption==='11'){
                this.vsego_detey = 17
            }
            if (this.selectOption==='12'){
                this.vsego_detey = 19
            }if (this.selectOption==='14'){
                this.vsego_detey = 23
            }
            this.flag=1

        },
        //удаление ребенка
        remove_child(person){

            if (this.selectOption==='1'){
                this.index_child =this.child_gruos.druzba.indexOf(person)
                this.child_gruos.druzba.splice(this.index_child,1)
            }
            if (this.selectOption==='2'){
                this.index_child =this.child_gruos.solnishko.indexOf(person)
                this.child_gruos.solnishko.splice(this.index_child,1)
            }
            if (this.selectOption==='3'){
                this.index_child =this.child_gruos.zhemchuzhina.indexOf(person)
                this.child_gruos.zhemchuzhina.splice(this.index_child,1)
            }
            if (this.selectOption==='4'){
                this.index_child =this.child_gruos.osminozhka.indexOf(person)
                this.child_gruos.osminozhka.splice(this.index_child,1)
            }
            if (this.selectOption==='5'){
                this.index_child =this.child_gruos.kapelki.indexOf(person)
                this.child_gruos.kapelki.splice(this.index_child,1)
            }
            if (this.selectOption==='6'){
                this.index_child =this.child_gruos.cherepashki.indexOf(person)
                this.child_gruos.cherepashki.splice(this.index_child,1)
            }
            if (this.selectOption==='7'){
                this.index_child =this.child_gruos.luchiki.indexOf(person)
                this.child_gruos.luchiki.splice(this.index_child,1)
            }
            if (this.selectOption==='8'){
                this.index_child =this.child_gruos.ulibka.indexOf(person)
                this.child_gruos.ulibka.splice(this.index_child,1)
            }
            if (this.selectOption==='9'){
                this.index_child =this.child_gruos.zoloto.indexOf(person)
                this.child_gruos.zoloto.splice(this.index_child,1)
            }
            if (this.selectOption==='10'){
                this.index_child =this.child_gruos.krabiki.indexOf(person)
                this.child_gruos.krabiki.splice(this.index_child,1)
            }
            if (this.selectOption==='11'){
                this.index_child =this.child_gruos.morychki.indexOf(person)
                this.child_gruos.morychki.splice(this.index_child,1)
            }
            if (this.selectOption==='12'){
                this.index_child =this.child_gruos.delfinchiki.indexOf(person)
                this.child_gruos.delfinchiki.splice(this.index_child,1)
            }if (this.selectOption==='14'){
                this.index_child =this.child_gruos.zvezdochki.indexOf(person)
                this.child_gruos.zvezdochki.splice(this.index_child,1)
            }
        },

        //добавление ребенка
        add_child(){
            const child= {
                id: Date.now(),
                namee: this.valuename,
                familiyaa:this.valuefamil,
                otmetka_vos:'-',
                otmetka_logo:'-',
                otmetka_psiho:'-',
                otmetka_inst_s:'-',
                otmetka_inst_z:'-',
                otmetka_muz:'-'

            }
            if (this.selectOption==='1'){
                this.child_gruos.druzba.push(child)
                this.vsego_detey=this.child_gruos.druzba.length
            }
            if (this.selectOption==='2'){
                this.child_gruos.solnishko.push(child)
                this.vsego_detey=this.child_gruos.solnishko.length
            }
            if (this.selectOption==='3'){
                this.child_gruos.zhemchuzhina.push(child)
                this.vsego_detey=this.child_gruos.zhemchuzhina.length
            }
            if (this.selectOption==='4'){
                this.child_gruos.osminozhka.push(child)
                this.vsego_detey=this.child_gruos.osminozhka.length
            }
            if (this.selectOption==='5'){
                this.child_gruos.kapelki.push(child)
                this.vsego_detey=this.child_gruos.kapelki.length
            }
            if (this.selectOption==='6'){
                this.child_gruos.cherepashki.push(child)
                this.vsego_detey=this.child_gruos.cherepashki.length
            }
            if (this.selectOption==='7'){
                this.child_gruos.luchiki.push(child)
                this.vsego_detey=this.child_gruos.luchiki.length
            }
            if (this.selectOption==='8'){
                this.child_gruos.ulibka.push(child)
                this.vsego_detey=this.child_gruos.ulibka.length
            }
            if (this.selectOption==='9'){
                this.child_gruos.zoloto.push(child)
                this.vsego_detey=this.child_gruos.zoloto.length
            }
            if (this.selectOption==='10'){
                this.child_gruos.krabiki.push(child)
                this.vsego_detey=this.child_gruos.krabiki.length
            }
            if (this.selectOption==='11'){
                this.child_gruos.morychki.push(child)
                this.vsego_detey=this.child_gruos.morychki.length
            }
            if (this.selectOption==='12'){
                this.child_gruos.delfinchiki.push(child)
                this.vsego_detey=this.child_gruos.delfinchiki.length
            }if (this.selectOption==='14'){
                this.child_gruos.zvezdochki.push(child)
                this.vsego_detey=this.child_gruos.zvezdochki.length
            }
            this.valuename=''
            this.valuefamil=''
            this.openAdd= false
        },
        raschet_otchet(){
            this.flag_othcet=1
            for (let i=0; i<sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                const value = sessionStorage[key];  // получение значения по ключу
                let user = JSON.parse(value);
                let ect =[]
                let yvazh=[]
                let neyvazh=[]
                let p=''
                let y=''
                let n=''

                //для дружбы
                if (key[0]===this.selectOption && key[0]==='1'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='1'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='1'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='1'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='1'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='1'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.druzba[b].id)){
                                this.child_gruos.druzba[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                // для солнышка
                if (key[0]===this.selectOption && key[0]==='2'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='2'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='2'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='2'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='1'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='2'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.solnishko[b].id)){
                                this.child_gruos.solnishko[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //    для жемчужинки
                if (key[0]===this.selectOption && key[0]==='3'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='3'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='3'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='3'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='3'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='3'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zhemchuzhina[b].id)){
                                this.child_gruos.zhemchuzhina[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //    для осьминожки
                if (key[0]===this.selectOption && key[0]==='4'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='4'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='4'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='4'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhkaa[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='4'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='4'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.osminozhka[b].id)){
                                this.child_gruos.osminozhka[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //    для капельки
                if (key[0]===this.selectOption && key[0]==='5'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='5'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='5'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='5'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='5'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='5'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.kapelki[b].id)){
                                this.child_gruos.kapelki[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //для черепашки
                if (key[0]===this.selectOption && key[0]==='6'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='6'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='6'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='6'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='6'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='6'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.cherepashki[b].id)){
                                this.child_gruos.cherepashki[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //для лучика
                if (key[0]===this.selectOption && key[0]==='7'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='7'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='7'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='7'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='7'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='7'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.luchiki[b].id)){
                                this.child_gruos.luchiki[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //для улыбки
                if (key[0]===this.selectOption && key[0]==='8'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='8'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='8'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='8'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='8'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='8'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.ulibka[b].id)){
                                this.child_gruos.ulibka[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //для золотой рыбки
                if (key[0]===this.selectOption && key[0]==='9'&&key[1]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='9'&&key[1]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='9'&&key[1]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='9'&&key[1]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='9'&&key[1]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]===this.selectOption && key[0]==='9'&&key[1]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zoloto[b].id)){
                                this.child_gruos.zoloto[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //для крабиков
                if ( key[0]==='1'&&key[1]==='0'&&key[2]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='0'&&key[2]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='0'&&key[2]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='0'&&key[2]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='0'&&key[2]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='0'&&key[2]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.krabiki[b].id)){
                                this.child_gruos.krabiki[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //для морячков
                if ( key[0]==='1'&&key[1]==='1'&&key[2]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='1'&&key[2]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='1'&&key[2]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='1'&&key[2]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='1'&&key[2]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='1'&&key[2]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.morychki[b].id)){
                                this.child_gruos.morychki[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //для дельфинчиков
                if ( key[0]==='1'&&key[1]==='2'&&key[2]==='^' ) {
                    console.log('1')
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_vos='неуваж'
                            }
                        }
                    }
                }
                if ( key[0]==='1'&&key[1]==='2'&&key[2]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='2'&&key[2]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='2'&&key[2]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='2'&&key[2]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='2'&&key[2]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.delfinchiki[b].id)){
                                this.child_gruos.delfinchiki[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

                //для звездочек
                if (key[0]==='1'&&key[1]==='4'&&key[2]==='^') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_vos='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_vos='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_vos='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='4'&&key[2]==='!') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_logo='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_logo='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_logo='неуваж'
                            }

                        }

                    }

                }
                if ( key[0]==='1'&&key[1]==='4'&&key[2]==='@') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_psiho='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_psiho='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_psiho='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='4'&&key[2]==='#') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_inst_z='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_inst_z='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_inst_z='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='4'&&key[2]==='$') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_inst_s='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_inst_s='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_inst_s='неуваж'
                            }

                        }

                    }

                }
                if (key[0]==='1'&&key[1]==='4'&&key[2]==='%') {
                    p = user.prisutstvut
                    y = user.yvazhitelnaya
                    n= user.neyvazhitelnaya
                    ect.push(p.split(' '))
                    yvazh.push(y.split(' '))
                    neyvazh.push(n.split(' '))
                    for (let a=0;a<this.vsego_detey;a++){
                        for(let b=0;b<this.vsego_detey;b++){
                            if(Number(ect[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_muz='есть'
                            }
                            if(Number(yvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_muz='уваж'
                            }
                            if(Number(neyvazh[0][a])===Number(this.child_gruos.zvezdochki[b].id)){
                                this.child_gruos.zvezdochki[b].otmetka_muz='неуваж'
                            }

                        }

                    }

                }

            }

        },


    },
    computed:{
        sortedAndSearchChild(){
            if(this.selectOption==='1'){
                return [...this.child_gruos.druzba].sort((p1, p2) => p1.familiyaa?.localeCompare(p2.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='2'){
                return [...this.child_gruos.solnishko].sort((p1, p2) => p1.familiyaa?.localeCompare(p2.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='3'){
                return [...this.child_gruos.zhemchuzhina].sort((p1, p2) => p1.familiyaa?.localeCompare(p2.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='4'){
                return [...this.child_gruos.osminozhka].sort((p1, p2) => p2.familiyaa?.localeCompare(p1.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='5'){
                return [...this.child_gruos.kapelki].sort((p1, p2) => p2.familiyaa?.localeCompare(p1.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='6'){
                return [...this.child_gruos.cherepashki].sort((p1, p2) => p2.familiyaa?.localeCompare(p1.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='7'){
                return [...this.child_gruos.luchiki].sort((p1, p2) => p1.familiyaa?.localeCompare(p2.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='8'){
                return [...this.child_gruos.ulibka].sort((p1, p2) => p1.familiyaa?.localeCompare(p2.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='9'){
                return [...this.child_gruos.zoloto].sort((p1, p2) => p2.familiyaa?.localeCompare(p1.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='10'){
                return [...this.child_gruos.krabiki].sort((p1, p2) => p2.familiyaa?.localeCompare(p1.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='11'){
                return [...this.child_gruos.morychki].sort((p1, p2) => p2.familiyaa?.localeCompare(p1.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='12'){
                return [...this.child_gruos.delfinchiki].sort((p1, p2) => p2.familiyaa?.localeCompare(p1.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }
            else if(this.selectOption==='14'){
                return [...this.child_gruos.zvezdochki].sort((p1, p2) => p2.familiyaa?.localeCompare(p1.familiyaa)).filter(p=>p.familiyaa.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
            }

        },
    },

}
const app1 = Vue.createApp(App)
app1.mount('#app')