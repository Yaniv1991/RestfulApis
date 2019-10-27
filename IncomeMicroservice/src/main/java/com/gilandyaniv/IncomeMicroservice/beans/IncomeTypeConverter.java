package com.gilandyaniv.IncomeMicroservice.beans;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class IncomeTypeConverter implements AttributeConverter<Integer, IncomeType>{

	@Override
	public IncomeType convertToDatabaseColumn(Integer id) {
return IncomeType.fromInteger(id);
	}

	@Override
	public Integer convertToEntityAttribute(IncomeType dbData) {
return dbData.getId();
	}

	
}
