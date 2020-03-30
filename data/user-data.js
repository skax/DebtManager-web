import UserSummary from '../models/user-summary';
import UserShortInfo from '../models/user-short-info';
import LoanShortInfo from '../models/loan-short-info';


export const USER_DATA = new UserSummary(
    1,
    new UserShortInfo(
        "Mihau",
        1500,
        2000
    ),
    [
        new LoanShortInfo("Wiktor Kołodziejczak", 30),
        new LoanShortInfo("Krzysztof Jurczyszyn", 90),
        new LoanShortInfo("Angela Kabacińska", 5000),
        new LoanShortInfo("Stanisław Blumendeld", 5),
        new LoanShortInfo("Arnold Boczek", 800),
        new LoanShortInfo("Malinowska", 55)
    ],
    [
        new LoanShortInfo("Marian Paździoch", 130),
        new LoanShortInfo("Prezes Kozłowski", 999999),
        new LoanShortInfo("Ferynand Kiepski", 1190),
        new LoanShortInfo("Halyna Kiepska", 1190),
        new LoanShortInfo("Walduś Kiepski", 101010),
        new LoanShortInfo("Jolanta Kiepska", 33),
        new LoanShortInfo("Edzio Listonosz", 1190)
    ]
); 
