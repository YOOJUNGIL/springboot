package com.fintech.springboot.dao.mybatis.mariadb.custuser;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.fintech.springboot.dao.dto.CustUser;

@Mapper
public interface CustUserMapper {

	public List<CustUser> getCustUserList();
	public CustUser getCustUser(String userId);
	public int save(CustUser custUser);
	public int modify(CustUser custUser);
	public int delete(String userId);
}
