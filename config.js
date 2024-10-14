import winreg

def set_registry_value(key_path, value_name, value_data):
    try:
        # 打开注册表键
        key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, key_path, 0, winreg.KEY_SET_VALUE)
        winreg.SetValueEx(key, value_name, 0, winreg.REG_SZ, value_data)  # REG_SZ 类型
        winreg.CloseKey(key)
        print(f"设置注册表值 '{value_name}' 为 '{value_data}'。")
    except Exception as e:
        print(f"设置注册表值失败: {e}")

# 使用示例
set_registry_value(r"Software\MyApp", "Version", "1.0")
