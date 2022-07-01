Roman Vovk
28_Group
Postman. HW_1

Создать запросы в Postman.

Protocol: http
IP: 162.55.220.72
Port: 5005

EP_1
Method: GET
EndPoint: /get_method
request url params: http://162.55.220.72:5005/get_method?name=Roman&age=24
 name: str
 age: int

response: 
[
    "Roman",
    "24"
]
==================

EP_2
Method: POST
EndPoint: /user_info_3
request form data: 
 name: str
 age: int
 salary: int

response: 
{
    "age": "24",
    "family": {
        "children": [
            [
                "Alex",
                24
            ],
            [
                "Kate",
                12
            ]
        ],
        "u_salary_1_5_year": 8000
    },
    "name": "Roman",
    "salary": 2000
}

==================

EP_3
Method: GET
EndPoint: /object_info_1
request url params: http://162.55.220.72:5005/object_info_1?name=Roman&age=24&weight=77
 name: str
 age: int
 weight: int

response: 
{
    "age": 24,
    "daily_food": 0.924,
    "daily_sleep": 192.5,
    "name": "Roman"
}
==================

EP_4
Method: GET
EndPoint: /object_info_2
request url params: http://162.55.220.72:5005/object_info_2?name=Roman&age=24&salary=2000
 name: str
 age: int
 salary: int

response: 
{
    "person": {
        "u_age": 24,
        "u_name": [
            "Roman",
            2000,
            24
        ],
        "u_salary_5_years": 8400.0
    },
    "qa_salary_after_1.5_year": 6600.0,
    "qa_salary_after_12_months": 5400.0,
    "qa_salary_after_3.5_years": 7600.0,
    "qa_salary_after_6_months": 4000,
    "start_qa_salary": 2000
}
==================

EP_5
Method: GET
EndPoint: /object_info_3
request url params: http://162.55.220.72:5005/object_info_3?name=Roman&age=24&salary=2000
 name: str
 age: int
 salary: int

response: 
{
    "age": "24",
    "family": {
        "children": [
            [
                "Alex",
                24
            ],
            [
                "Kate",
                12
            ]
        ],
        "pets": {
            "cat": {
                "age": 3,
                "name": "Sunny"
            },
            "dog": {
                "age": 4,
                "name": "Luky"
            }
        },
        "u_salary_1_5_year": 8000
    },
    "name": "Roman",
    "salary": 2000
}
==================

EP_6
Method: GET
EndPoint: /object_info_4
request url params: http://162.55.220.72:5005/object_info_4?name=Roman&age=24&salary=2000
 name: str
 age: int
 salary: int

response: 
{
    "age": 24,
    "name": "Roman",
    "salary": [
        2000,
        "4000",
        "6000"
    ]
}

==================

EP_7
Method: POST
EndPoint: /user_info_2
request form data: 
 name: str
 age: int
 salary: int

response: 
{
    "person": {
        "u_age": 24,
        "u_name": [
            "Roman",
            2000,
            24
        ],
        "u_salary_5_years": 8400.0
    },
    "qa_salary_after_1.5_year": 6600.0,
    "qa_salary_after_12_months": 5400.0,
    "qa_salary_after_3.5_years": 7600.0,
    "qa_salary_after_6_months": 4000,
    "start_qa_salary": 2000
}