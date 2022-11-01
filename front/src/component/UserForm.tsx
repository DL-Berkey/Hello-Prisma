import { ChangeEvent, MouseEvent, useState } from "react";
import fetchingData from "@/api/api";

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as any;

        setFormData((prev) => {
            const newData = {
                ...prev,
                [name]: value,
            };

            return newData;
        });
    };

    const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetchingData("http://localhost:3002/add", "POST", {
            name: formData.name,
            role: formData.role,
        }).then((result) => {
            console.log(result);
            alert("추가되었습니다.");
        });
    };

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetchingData("http://localhost:3002/get/users", "GET").then((result) => {
            console.log(result);
        });
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="이름"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                />
                <input
                    type="text"
                    placeholder="역활"
                    name="role"
                    value={formData.role}
                    onChange={onChange}
                />
                <button onClick={onSubmit}>유저 등록</button>
            </form>
            <button onClick={onClick}>모든 유저 가져오기</button>
        </div>
    );
};

export default UserForm;
